import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';

const Front = () => {
	const [tickets, setTicket] = useState([]);
	useEffect(() => {
		getTicket();
	}, []);

	const listMainProduct1 = [];
	const listMainProduct2 = [];
	const listMainProduct3 = [];
	function getTicket() {
		axios
			.get('http://localhost:8080/api/event')
			.then((data) => {
				let x = data.data;

				setTicket(x);
			})
			.catch((err) => console.log(err));
	}

	for (let i = 0; i < 3; i++) {
		if (tickets[i] !== undefined && tickets[i].waitingToAccept !== true) {
			console.log(tickets[i]);
			let idEvent = tickets[i].idEvent;

			listMainProduct1.push(
				<div class='card'>
					<Link to={'/zamowienie/' + idEvent}>
						<img className='d-block w-100' src={"http://localhost:8080/img/" + idEvent + ".png"} alt='First slide' />
						<div class='card-body'>
							<h5 class='card-title'>{tickets[i].nameEvent}</h5>
							<p class='card-text'>
								Lokalizacja: {tickets[i].locationEvent}
							</p>
							<p class='card-text'>
								Data wydarzenia: {tickets[i].dateTimeEvent}
							</p>
							<p class='card-text'>
								Cena biletu: {tickets[i].priceEvent} zł
							</p>
						</div>
					</Link>
				</div>
			);
		}
	}
	for (let i = 3; i < 6; i++) {
		if (tickets[i] !== undefined && tickets[i].waitingToAccept !== true) {
			let idEvent = tickets[i].idEvent;

			listMainProduct2.push(
				<div class='card'>
					<Link to={'/zamowienie/' + idEvent}>
						<img className='d-block w-100' src={"http://localhost:8080/img/" + idEvent + ".png"} alt='First slide' />
						<div class='card-body'>
							<h5 class='card-title'>{tickets[i].nameEvent}</h5>
							<p class='card-text'>
								Lokalizacja: {tickets[i].locationEvent}
							</p>
							<p class='card-text'>
								Data wydarzenia: {tickets[i].dateTimeEvent}
							</p>
							<p class='card-text'>
								Cena biletu: {tickets[i].priceEvent} zł
							</p>
						</div>
					</Link>
				</div>
			);
		}
	}
	for (let i = 6; i < 9; i++) {
		if (tickets[i] !== undefined && tickets[i].waitingToAccept !== true) {
			let idEvent = tickets[i].idEvent;

			listMainProduct3.push(
				<div class='card'>
					<Link to={'/zamowienie/' + idEvent}>
						<img className='d-block w-100' src={"http://localhost:8080/img/" + idEvent + ".png"} alt='First slide' />
						<div class='card-body'>
							<h5 class='card-title'>{tickets[i].nameEvent}</h5>
							<p class='card-text'>
								Lokalizacja: {tickets[i].locationEvent}
							</p>
							<p class='card-text'>
								Data wydarzenia: {tickets[i].dateTimeEvent}
							</p>
							<p class='card-text'>
								Cena biletu: {tickets[i].priceEvent} zł
							</p>
						</div>
					</Link>
				</div>
			);
		}
	}

	return (
		<div class='frontPage'>
			<h1>Najnowsze wydarzenia</h1>
			<div id='containerFix'>
				<Carousel fade>
					<Carousel.Item interval={500000}>
						<div class='card-deck'>{listMainProduct1}</div>
					</Carousel.Item>
					<Carousel.Item interval={500000}>
						<div class='card-deck'>{listMainProduct2}</div>
					</Carousel.Item>
					<Carousel.Item interval={500000}>
						<div class='card-deck'>{listMainProduct3}</div>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default Front;
