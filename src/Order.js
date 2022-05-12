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
	console.log(id);
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
					idPayment: '1', //Do momenu paypal
				},
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	console.log(userData);

	let printData;
	if (ticket !== undefined) {
		printData = (
			<div class='card'>
				<img src={logo} class='card-img-top' alt='...' />
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
		<div id='parentOrder'>
			<div class='card-deck'>{printData}</div>
			{userData.role === 'ROLE_CLIENT' && (
				<button type='submit' onClick={addTicket}>
					Kup bilet
				</button>
			)}
		</div>
	);
};

export default Order;
