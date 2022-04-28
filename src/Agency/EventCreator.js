import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const EventCreator = () => {
	const [capacityEvent, setCapacityEvent] = useState('');
	const [dateTimeEvent, setDateTimeEvent] = useState('');
	const [locationEvent, setLocationEvent] = useState('');
	const [nameEvent, setNameEvent] = useState('');
	const [priceEvent, setPriceEvent] = useState('');
	const [typeEvent, setTypeEvent] = useState(1);
	const [imageData, setImageData] = useState('');
	const [imagePreview, setImagePreview] = useState('');
	const [imageName, setImageName] = useState('');

	const handleSubmit = (event) => {
		const axios = require('axios').default;
		event.preventDefault();

		axios
			.post(
				'http://localhost:8080/api/event/add',
				{
					
					capacityEvent: capacityEvent,
					dateTimeEvent: dateTimeEvent,
					locationEvent: locationEvent,
				   	priceEvent: priceEvent,
					nameEvent: nameEvent,
					   
						typeEvent: 
						  {
							  idTypeEvent: typeEvent
						  },
					  
						  agency:
						  {
							  idAgency: "1"
						  }
					  },
				
			)
			.then(function (response) {
				console.log(response);
				console.log('zwycienstwo');
			})
			.catch(function (error) {
				console.log(error);
				console.log('error :<');
			});

		setCapacityEvent('');
		setDateTimeEvent('');
		setLocationEvent('');
		setNameEvent('');
	};

	const uploadImage = async (e) => {
		const file = e.target.files[0];

		const base64 = await convertBase64(file);
		console.log(base64);
		setImageData(base64);
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	return (
		<div class='bodyPage'>
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
						id='dateTimeEvent'
						placeholder='Dzień wydarzenia'
						value={dateTimeEvent}
						required
						onChange={(e) => setDateTimeEvent(e.target.value)}
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
					<label>
						Wybierz rodzaj wydarzenia <br />
						<select
							value={typeEvent}
							required
							onChange={(e) => setTypeEvent(e.target.value)}>
							<option  value='1'>
								Koncert
							</option>
							<option value='2'>Wydarzenie Sportowe</option>
							<option value='3'>Teatr</option>
						</select>
					</label>

					<br />

					<div class='mb-3'>
						<label for='formFile' class='form-label'>
							Wybierz zdjęcie awataru
						</label>
						<input
							class='form-control'
							type='file'
							accept='image/*'
							id='formFile'
							onChange={(e) => {
								uploadImage(e);
							}}
						/>
					</div>

					<br />
					<img src={imageData} height='430px' width='316px' />
					<br />
					<br />
					<input type='submit' value='Utworz wydarzenie' />
				</form>
			</div>
		</div>
	);
};

export default EventCreator;
