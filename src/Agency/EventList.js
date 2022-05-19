import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const EventList = () => {
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
						<Link to={'/agency/event/creator/update/' + events[i].idEvent}>
							<button type='button'>Edytuj</button>
						</Link>
					</td>
				</tr>
			);
		}
	}
	return <div className='parentMenu'>{eventList}</div>;
};

export default EventList;
