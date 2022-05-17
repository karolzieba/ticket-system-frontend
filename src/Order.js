import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from './logo.svg';
const Order = ({ userData }) => {
	const [ticket, setTicket] = useState([]);
	useEffect(() => {
		getTicket();
	}, []);

	let { id } = useParams();

	function getTicket() {
		axios
			.get('http://localhost:8080/api/event/' + id)
			.then((data) => {
				setTicket(data.data);
			})
			.catch((err) => alert(err));
	}
	const date = new Date();
	const result = date.toISOString().split('T')[0];

	function getPayment() {
		axios.defaults.withCredentials = true;

		axios
			.post('http://localhost:8080/api/payment/pay', {
				price: ticket.priceEvent,
			})
			.then((response) => {
				console.log(response.data);
				window.location.href = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function addTicket() {
		axios.defaults.withCredentials = true;

		axios
			.post('http://localhost:8080/api/ticket', {
				dateTicketBuy: result,

				client: {
					idClient: userData.id,
				},
				event: {
					idEvent: id,
				},
				payment: {
					idPayment: 2, //Do momenu paypal
				},
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	let printData;
	if (ticket !== undefined) {
		printData = (
			<div class='card'>
				<img
					src={'http://localhost:8080/img/' + ticket.idEvent + '.png'}
					class='card-img-top'
					alt='...'
				/>
				<div class='card-body'>
					<h5 class='card-title'>{ticket.nameEvent}</h5>
					<p class='card-text'>
						Lokalizacja:
						{ticket.locationEvent}
					</p>
					<p class='card-text'>
						Data wydarzenia:
						{ticket.dateTimeEvent}
					</p>
					<p class='card-text'>
						Cena biletu:
						{ticket.priceEvent} zł
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className='parentOrder'>
			<div class='card-deck'>{printData}</div>
			{userData.role === 'ROLE_CLIENT' && (
				<button type='submit' onClick={getPayment}>
					Kup bilet
				</button>
			)}
		</div>
	);
};

export default Order;
