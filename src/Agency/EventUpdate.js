import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EventUpdate = () => {
	useEffect(() => {
		getEvent();
	}, []);
	const [event, setEvent] = useState();
	const [newLocation, setNewLocation] = useState();
	const [newDateEvent, setnewDateEvent] = useState();
	const [newTimeEvent, setTimeEvent] = useState();
	const [newAllDateEvent, setNewAllDateEvent] = useState();
	const [newPrice, setNewPriceEvent] = useState();
	const [newAge, setNewAgeEvent] = useState();
	let { idEvent } = useParams();

	function getEvent() {
		axios.get('http://localhost:8080/api/event/' + idEvent).then((data) => {
			setEvent(data.data);
			setNewLocation(data.data.locationEvent);
			let tempDate = new Date(data.data.dateTimeEvent);

			setnewDateEvent(tempDate.toISOString().substring(0, 10));
			setTimeEvent(tempDate.toTimeString().substring(0, 5));
			setNewPriceEvent(data.data.priceEvent);
			setNewAgeEvent(data.data.minAgeLimit);
		});
	}

	function updateEvent() {}
	
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
							/>
							<input
								type='time'
								id='timeEvent'
								defaultValue={date.toTimeString().substring(0, 5)}
							/>
						</p>
						<p class='card-text'>
							Cena biletu:{' '}
							<input
								class='form-control'
								type='text'
								placeholder={event.priceEvent + ' zł'}
							/>
						</p>
						<p class='card-text'>
							Rodzaj wydarzenia: <br />
							{event.typeEvent.nameTypeEvent === 'Pilkanozna' && 'Piłka nożna'}
						</p>
						<p class='card-text'>
							Minimalny wiek wstępu:{' '}
							<input
								class='form-control'
								type='text'
								placeholder={event.typeEvent.minAgeLimit + ' lat'}
							/>
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
							class='loginRegisterButton'
							type='submit'
							value='Zarejestruj'
						/>
					</form>
				</div>
			</div>
		);
	}

	return <div id='parentEventUpdate'>{printData}</div>;
};
export default EventUpdate;
