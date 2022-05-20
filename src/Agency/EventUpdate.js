import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EventUpdate = () => {
	useEffect(() => {
		getEvent();
	}, []);
	const [event, setEvent] = useState();
	const [newLocation, setNewLocation] = useState();
	const [newDateEvent, setNewDateEvent] = useState();
	const [newTimeEvent, setNewTimeEvent] = useState();

	const [newPrice, setNewPriceEvent] = useState();

	let { idEvent } = useParams();

	function getEvent() {
		axios.get('http://localhost:8080/api/event/' + idEvent).then((data) => {
			setEvent(data.data);
			setNewLocation(data.data.locationEvent);
			let tempDate = new Date(data.data.dateTimeEvent);

			setNewDateEvent(tempDate.toISOString().substring(0, 10));
			setNewTimeEvent(tempDate.toTimeString().substring(0, 5));
			setNewPriceEvent(data.data.priceEvent);
		});
	}

	function updateEvent() {
		if (event !== undefined) {
			axios
				.patch('http://localhost:8080/api/event/' + event.idEvent, {
					eventId: event.idEvent,
					priceEvent: newPrice,
					locationEvent: newLocation,
					dateTimeEvent: newDateEvent + 'T' + newTimeEvent,
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}

	let printData;
	if (event !== undefined) {
		let date = new Date(event.dateTimeEvent);

		printData = (
			<div class='order-card'>
				<img
					id='order-element1'
					src={'http://localhost:8080/img/' + event.idEvent + '.png'}
					alt='...'
				/>
				<div id='order-element2'>
					<form onSubmit={updateEvent}>
						<h5 class='card-title'>{event.nameEvent}</h5>
						<p class='card-text'>
							Lokalizacja:{' '}
							<input
								class='form-control'
								type='text'
								placeholder={event.locationEvent}
								defaultValue={event.locationEvent}
								value={newLocation}
								onChange={(e) => setNewLocation(e.target.value)}
							/>
						</p>
						<p class='card-text'>
							Data wydarzenia: <br />{' '}
							<input
								type='date'
								id='dateEvent'
								defaultValue={date.toISOString().substring(0, 10)}
								onChange={(e) => setNewDateEvent(e.target.value)}
							/>
							<input
								type='time'
								id='timeEvent'
								defaultValue={date.toTimeString().substring(0, 5)}
								onChange={(e) => setNewTimeEvent(e.target.value)}
							/>
						</p>
						<p class='card-text'>
							Cena biletu:{' '}
							<input
								class='form-control'
								type='text'
								placeholder={event.priceEvent + ' zł'}
								defaultValue={event.priceEvent}
								value={newPrice}
								onChange={(e) => setNewPriceEvent(e.target.value)}
							/>
						</p>
						<p class='card-text'>
							Rodzaj wydarzenia: <br />
							{event.typeEvent.nameTypeEvent === 'Pilkanozna' && 'Piłka nożna'}
						</p>
						<p class='card-text'>
							Minimalny wiek wstępu: <br />
							{event.typeEvent.minAgeLimit}
						</p>
						<p class='card-text'>
							Agencja organizująca: <br />
							{event.agency.nameCompany}
						</p>
						<p class='card-text'>
							Pozostało miejsc: <br />
							{event.capacityEvent}
						</p>
						<input
							class='loginUpdateButton'
							type='submit'
							value='Zaaktualizuj'
						/>
					</form>
				</div>
			</div>
		);
	}

	return <div id='parentEventUpdate'>{printData}</div>;
};
export default EventUpdate;
