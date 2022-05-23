import React, { useState, useEffect } from 'react';

const PaymentManagement = () => {
	const axios = require('axios').default;
	axios.defaults.withCredentials = true;

	const [payments, setPayments] = useState('');
	const [tickets, setTickets] = useState('');
	const [refresh, setRefresh] = useState(false);
	let paymentList = [],
		ticketList = [];

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/payment')
			.then(function (response) {
				setPayments(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		axios
			.get('http://localhost:8080/api/ticket')
			.then(function (response) {
				console.log(response.data);
				setTickets(response.data);
				console.log(tickets);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [refresh]);

	for (let i = 0; i < payments.length; i++) {
		if (payments[i] !== undefined) {
			let date = new Date(payments[i].startDatePayment);
			date.setMonth(date.getMonth() + 1);
			if (payments[i].typePayment.nameTypePayment !== 'Gotowka') {
				date.setHours(date.getHours() + 2);
			}

			let date2 = new Date(payments[i].endDatePayment);
			date2.setMonth(date2.getMonth() + 1);

			paymentList.push(
				<tr>
					<th scope='row'>{payments[i].idPayment}</th>
					<td>
						{date.getDate() +
							'.' +
							date.getMonth() +
							'.' +
							date.getFullYear() +
							' ' +
							date.getHours() +
							':' +
							date.getMinutes()}
					</td>
					<td>
						{payments[i].endDatePayment === null ? (
							<button
								type='button'
								class='btn btn-primary'
								onClick={() => {
									acceptPayment(payments[i].idPayment);
								}}>
								Potwierdź płatność
							</button>
						) : (
							date2.getDate() +
							'.' +
							date2.getMonth() +
							'.' +
							date2.getFullYear() +
							' ' +
							date2.getHours() +
							':' +
							date2.getMinutes()
						)}
					</td>
					<td>
						{payments[i].typePayment.nameTypePayment === 'Gotowka'
							? 'Przelew tradycyjny'
							: 'PayPal'}
					</td>
				</tr>
			);
		}
	}

	for (let i = 0; i < tickets.length; i++) {
		if (
			tickets[i] !== undefined &&
			tickets[i].payment !== undefined &&
			tickets[i].client !== undefined &&
			tickets[i].event !== undefined
		) {
			let date = new Date(tickets[i].dateTicketBuy);
			date.setMonth(date.getMonth() + 1);
			if (tickets[i].payment.typePayment.nameTypePayment !== 'Gotowka') {
				date.setHours(date.getHours() + 2);
			}
			ticketList.push(
				<tr>
					<th scope='row'>{tickets[i].idTicket}</th>
					<td>
						{date.getDate() +
							'.' +
							date.getMonth() +
							'.' +
							date.getFullYear() +
							' ' +
							date.getHours() +
							':' +
							date.getMinutes()}
					</td>
					<td>
						{tickets[i].client.nameUser} {tickets[i].client.surName} (ID:{' '}
						{tickets[i].client.idClient})
					</td>
					<td>
						{tickets[i].event.nameEvent} (ID: {tickets[i].event.idEvent})
					</td>
					<td>
						{tickets[i].payment.endDatePayment === null
							? 'Niepotwierdzona'
							: 'ID: ' + tickets[i].payment.idPayment}
					</td>
					<td>
						{
							<button
								type='button'
								class='btn btn-primary'
								onClick={() => {
									deleteTicket(tickets[i].idTicket);
								}}>
								Usuń
							</button>
						}
					</td>
				</tr>
			);
		}
	}

	const acceptPayment = (id) => {
		let date = new Date();
		date.setHours(date.getHours() + 2);

		axios
			.patch('http://localhost:8080/api/payment/' + id, {
				endDatePayment: date,
			})
			.then(function (response) {
				console.log(response);
				setRefresh(refresh ? false : true);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const deleteTicket = (id) => {
		axios
			.delete('http://localhost:8080/api/ticket/' + id)
			.then(function (response) {
				console.log(response);
				setRefresh(refresh ? false : true);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const paymentsRender =
		payments.length !== 0 ? (
			<div>
				<br />
				<br />
				<h2>ZARZĄDZANIE PŁATNOŚCIAMI</h2>
				<br />
				<br />
				<table class='table table-light'>
					<thead class='thead-dark'>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Data rozpoczęcia</th>
							<th scope='col'>Data zakończenia</th>
							<th scope='col'>Rodzaj płatności</th>
						</tr>
					</thead>
					<tbody>{paymentList}</tbody>
				</table>
			</div>
		) : (
			<div>
				<br />
				<br />
				<h2>ZARZĄDZANIE PŁATNOŚCIAMI</h2>
				<br />
				<br />
				<text>W systemie nie ma żadnych płatności.</text>
			</div>
		);

	const ticketsRender =
		tickets.length !== 0 ? (
			<div>
				<br />
				<br />
				<h2>ZARZĄDZANIE BILETAMI</h2>
				<br />
				<br />
				<table class='table table-light'>
					<thead class='thead-dark'>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Data zakupu</th>
							<th scope='col'>Klient</th>
							<th scope='col'>Wydarzenie</th>
							<th scope='col'>Płatność</th>
							<th scope='col'>Usuń</th>
						</tr>
					</thead>
					<tbody>{ticketList}</tbody>
				</table>
			</div>
		) : (
			<div>
				<br />
				<br />
				<h2>ZARZĄDZANIE BILETAMI</h2>
				<br />
				<br />
				<text>W systemie nie ma żadnych biletów.</text>
			</div>
		);
	return (
		<div className='parentMenu'>
			{paymentsRender}
			{ticketsRender}
		</div>
	);
};

export default PaymentManagement;
