import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const EventCreator = ({ userData }) => {
	const [dataState, setDataSate] = useState(userData);
	const navigate = useNavigate();
	const axios = require('axios').default;

	const [capacityEvent, setCapacityEvent] = useState('');
	const [dateEvent, setDateEvent] = useState('');
	const [timeEvent, setTimeEvent] = useState('');
	const [locationEvent, setLocationEvent] = useState('');
	const [nameEvent, setNameEvent] = useState('');
	const [priceEvent, setPriceEvent] = useState('');
	const [typeEvent, setTypeEvent] = useState(1);
	const [image, setImage] = useState('');

	const optionsData = [
		{
			name: 'Koncerty',
			states: ['Pop', 'Rap', 'Rock'],
		},
		{
			name: 'Wydarzenia Sportowe',
			states: ['Piłka nożna', 'MMA', 'Tennis'],
		},
		{
			name: 'Teatr',
			states: ['Komedia', 'Musicale', 'Dramat'],
		},
	];

	const [{ category, state }, setData] = useState({
		country: 'Koncerty',
		state: 'Pop',
	});

	const categories = optionsData.map((type) => (
		<option key={type.name} value={type.name}>
			{type.name}
		</option>
	));

	const states = optionsData
		.find((item) => item.name === category)
		?.states.map((state) => (
			<option key={state} value={state}>
				{state}
			</option>
		));

	function handleNameChange(event) {
		setData((data) => ({ state: '', category: event.target.value }));
	}

	function handleStateChange(event) {
		setData((data) => ({ ...data, state: event.target.value }));

		if (event.target.value == 'Piłka nożna') {
			setTypeEvent('Pilkanozna');
		} else {
			setTypeEvent(event.target.value);
		}
	}
	/******************************************************************************************************* */
	const handleSubmit = (event) => {
		axios.defaults.withCredentials = true;
		event.preventDefault();

		axios
			.post('http://localhost:8080/api/event', {
				capacityEvent: capacityEvent,
				dateTimeEvent: dateEvent + 'T' + timeEvent,
				locationEvent: locationEvent,
				priceEvent: priceEvent,
				nameEvent: nameEvent,
				waitingToAccept: true,

				typeEvent: {
					nameTypeEvent: typeEvent,
				},

				agency: {
					idAgency: userData.idRole,
				},
			})
			.then(function (response) {
				let idEvent = response.data;
				let blob = image.slice(0, image.size, 'image/png');
				let newFile = new File([blob], idEvent + '.png', { type: 'image/png' });
				let formData = new FormData();
				formData.append('image', newFile);

				axios
					.post('http://localhost:8080/api/event/image', formData, {
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					})
					.then(function (response) {
						navigate('/', { replace: true });
					})
					.catch(function (error) {
						console.log(error);
					})
					.then(function () {});
			})
			.catch(function (error) {
				console.log(error);
			});

		setCapacityEvent('');
		setDateEvent('');
		setTimeEvent('');
		setLocationEvent('');
		setNameEvent('');
		setTypeEvent('');
		setPriceEvent('');
	};

	return (
		<div id='creatorFormEvent'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					id='nameEvent'
					placeholder='Nazwa wydarzenia'
					value={nameEvent}
					required
					onChange={(e) => setNameEvent(e.target.value)}
				/>
				<br />
				<input
					type='number'
					id='capacityEvent'
					placeholder='Ilość miejsc'
					value={capacityEvent}
					required
					onChange={(e) => setCapacityEvent(e.target.value)}
				/>
				<br />
				<input
					type='date'
					id='dateEvent'
					placeholder='Dzień wydarzenia'
					value={dateEvent}
					required
					onChange={(e) => setDateEvent(e.target.value)}
				/>
				<input
					type='time'
					id='timeEvent'
					placeholder='Godzina'
					value={timeEvent}
					required
					onChange={(e) => setTimeEvent(e.target.value)}
				/>
				<br />
				<input
					type='text'
					id='locationEvent'
					placeholder='Miejsce wydarzenia'
					value={locationEvent}
					required
					onChange={(e) => setLocationEvent(e.target.value)}
				/>
				<br />
				<input
					type='number'
					step='any'
					id='priceEvent'
					placeholder='Koszt wydarzenia'
					value={priceEvent}
					required
					onChange={(e) => setPriceEvent(e.target.value)}
				/>

				<br />
				<br />

				<label>
					<select value={category} onChange={handleNameChange}>
						<option>Wybierz kategorię wydarzenia</option>
						{categories}
					</select>
				</label>

				<br />
				<label Wybierz kategorie wydarzenia />

				{category !== undefined && (
					<select value={state} onChange={handleStateChange}>
						<option>Wybierz podkategorię wydarzenia</option>
						{states}
					</select>
				)}

				<br />
				<br />

				<div class='mb-3'>
					<label for='formFile' class='form-label'>
						Wybierz zdjęcie plakatu
					</label>
					<br />
					<input
						id='formFile'
						type='file'
						accepts='image/*'
						required
						onChange={(e) => setImage(e.target.files[0])}
					/>
				</div>

				<br />
				<br />
				<input type='submit' value='Utworz wydarzenie' />
			</form>
		</div>
	);
};

export default EventCreator;
