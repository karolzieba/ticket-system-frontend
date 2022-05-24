import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const EventList = ({userData}) => {
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
					<th scope='row' class='first-header'>{events[i].idEvent}</th>
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

					<td>{events[i].agency.nameCompany}</td>
					<td>
						<Link to={'/agency/event/creator/update/' + events[i].idEvent}>
							<button type='button' class='edit-button'>Edytuj</button>
						</Link>
					</td>
				</tr>
			);
		}
	}
	return events.length !== 0 && userData.role === 'ROLE_AGENCY' ? (
		<div className='parentMenu'>
			<br />
			<br />
			<h2>EDYCJA WYDARZEŃ</h2>
			<br />
			<br />
			<table class='table table-light'>
				<thead class='thead-dark'>
					<th scope='col'>Identyfikator wydarzenia</th>
					<th scope='col'>Nazwa wydarzenia</th>
					<th scope='col'>Data wydarzenia</th>
					<th scope='col'>Lokalizacja wydarzenia</th>
					<th scope='col'>Cena wydarzenia</th>
					<th scope='col'>Pula biletów</th>
					<th scope='col'>Agenca </th>
					<th scope='col'>Akcja</th>
				</thead>
				<tbody>{eventList}</tbody>
			</table>
		</div>
	) : (
		<div className='parentMenu'>
			<br />
			<br />
			<h2>EDYCJA WYDARZEŃ</h2>
			<br />
			<br />
			<text>W systemie nie ma żadnych wydarzeń.</text>
		</div>
	);
};

export default EventList;
