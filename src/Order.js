import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Order = ({ userData }) => {
	const [ticket, setTicket] = useState([]);
	const [paymentType, setPaymentType] = useState("");
	const navigate = useNavigate();

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
	
	function addTicket() {
		axios.defaults.withCredentials = true;

		let date = new Date();
		date.setHours(date.getHours() + 1);

		if(paymentType === "traditional") {
			axios.post('http://localhost:8080/api/payment', {
				startDatePayment: date,
				typePayment: {
					idTypePayment: 2
				}
			})
			.then(function (response) {
				let idPayment = response.data;

				axios.post('http://localhost:8080/api/ticket', {
					dateTicketBuy: date,

					client: {
						idClient: userData.idRole,
					},
					event: {
						idEvent: id,
					},
					payment: {
						idPayment: idPayment
					},
				})
				.then(function (response) {
					navigate("/traditionalpaymentsuccess", { replace: true });
				})
				.catch(function (error) {
					navigate("/paymentfailed", { replace: true });
				});
			})
			.catch(function (error) {
				navigate("/paymentfailed", { replace: true });
			});
		}
		else if(paymentType === "paypal") {
			window.location.href = "";
		}
	}

	let printData;
	if (ticket !== undefined && ticket.typeEvent !== undefined && ticket.agency !== undefined) {
		printData = (
			<div id="order-card">
				<img id="order-element1"
					src={'http://localhost:8080/img/' + ticket.idEvent + '.png'}
					alt='...'
				/>
				<div id="order-element2">
					<h5 class='card-title'>{ticket.nameEvent}</h5>
					<p class='card-text'>
						Lokalizacja: {ticket.locationEvent}
					</p>
					<p class='card-text'>
						Data wydarzenia: {ticket.dateTimeEvent}
					</p>
					<p class='card-text'>
						Cena biletu: {ticket.priceEvent} zł
					</p>
					<p class='card-text'>
						Rodzaj wydarzenia: {ticket.typeEvent.nameTypeEvent}
					</p>
					<p class='card-text'>
						Minimalny wiek wstępu: {ticket.typeEvent.minAgeLimit} lat
					</p>
					<p class='card-text'>
						Agencja organizująca: {ticket.agency.nameCompany}
					</p>
					<p class='card-text'>
						Pozostało miejsc: {ticket.capacityEvent}
					</p>
					<br/>
					{(userData.role === 'ROLE_CLIENT' || userData.role === 'ROLE_CLIENT_FACEBOOK') && ticket.capacityEvent !== 0 && (
					<form id="order-element3" onSubmit={addTicket} value={paymentType} required onChange={(e) => setPaymentType(e.target.value)}>
						<select class="form-control" id="exampleFormControlSelect1" required>
							<option value="" disabled selected>Wybierz formę płatności</option>
							<option value="paypal">PayPal</option>
							<option value="traditional">Przelew tradycyjny</option>
						</select>
						<button id="order-element4" type="button" class="btn btn-primary" onClick={addTicket}>Kup bilet</button>
					</form>
					)}
					{(userData.role === 'ROLE_CLIENT' || userData.role === 'ROLE_CLIENT_FACEBOOK') && ticket.capacityEvent === 0 && <p class='card-text'>Na to wydarzenie nie ma już wolnych biletów.</p>}
					{(userData.role !== 'ROLE_CLIENT' && userData.role !== 'ROLE_CLIENT_FACEBOOK') && <p class='card-text'>Zaloguj się jako klient, aby kupić bilet na to wydarzenie.</p>}
				</div>
			</div>
		);
	}

	return (
		<div className='parentOrder'>
			<div class='card-deck'>{printData}</div>
		</div>
	);
};

export default Order;
