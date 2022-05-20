import React, { useState, useEffect } from 'react';

const EventManagement = ( { userData } ) => {
	const axios = require('axios').default;
	axios.defaults.withCredentials = true;

	const [events, setEvents] = useState('');
	const [refresh, setRefresh] = useState(false);
	let eventList = [];

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/event')
			.then(function (response) {
				setEvents(response.data);
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [refresh]);

	for (let i = 0; i < events.length; i++) {
		if (events[i] !== undefined) {
			let date = new Date(events[i].dateTimeEvent);
			date.setMonth(date.getMonth() + 1);

			eventList.push(
				<tr>
					<th scope='row'>{events[i].idEvent}</th>
					<td>{events[i].nameEvent}</td>
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
					<td>{events[i].locationEvent}</td>
					<td>{events[i].priceEvent}</td>
					<td>{events[i].capacityEvent}</td>
					<td>{events[i].typeEvent.nameTypeEvent}</td>
					<td>{events[i].agency.nameCompany}</td>
					<td>
						{events[i].waitingToAccept ? (
							<button
								type='button'
								class='btn btn-primary'
								onClick={() => {
									acceptEvent(events[i].idEvent);
								}}>
								Zaakceptuj
							</button>
							
						) : (
							'Zaakceptowane'
						)}
					</td>
					<td>
						{
							<button
								type='button'
								class='btn btn-primary'
								onClick={() => {
									deleteEvent(events[i].idEvent);
								}}>
								Usuń
							</button>
						}
					</td>
				</tr>
			);
		}
	}

	const acceptEvent = (id) => {
		axios
			.patch('http://localhost:8080/api/event/' + id, {
				waitingToAccept: false,
			})
			.then(function (response) {
				console.log(response);
				setRefresh(refresh ? false : true);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const deleteEvent = (id) => {
		axios
			.delete('http://localhost:8080/api/event/' + id)
			.then(function (response) {
				console.log(response);
				setRefresh(refresh ? false : true);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return events.length !== 0 && userData.role === "ROLE_MODERATOR"? (
		<div className='parentMenu'>
			<br />
			<br />
			<h2>ZARZĄDZANIE WYDARZENIAMI</h2>
			<br />
			<br />
			<table class='table table-light'>
				<thead class='thead-dark'>
					<tr>
						<th scope='col'>ID</th>
						<th scope='col'>Nazwa wydarzenia</th>
						<th scope='col'>Data i godzina</th>
						<th scope='col'>Lokalizacja</th>
						<th scope='col'>Cena</th>
						<th scope='col'>Ilość miejsc</th>
						<th scope='col'>Rodzaj wydarzenia</th>
						<th scope='col'>Nazwa agencji organizującej</th>
						<th scope='col'>Status</th>
						<th scope='col'>Usuń</th>
					</tr>
				</thead>
				<tbody>{eventList}</tbody>
			</table>
		</div>
	) : (
		<div className='parentMenu'>
			<br />
			<br />
			<h2>ZARZĄDZANIE WYDARZENIAMI</h2>
			<br />
			<br />
			<text>W systemie nie ma żadnych wydarzeń.</text>
		</div>
	);
};

export default EventManagement;
