import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
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
			.catch((err) => alert(err));
	}

	console.log(tickets);

	for (let i = 0; i < 3; i++) {
		listMainProduct1.push(
			<div class='card'>
				<img className='d-block w-100' src={logo} alt='First slide' />
				<div class='card-body'>
					<h5 class='card-title'>
						{tickets[i] !== undefined && tickets[i].nameEvent}
					</h5>
					<p class='card-text'>
						Lokalizacja:
						{tickets[i] !== undefined && tickets[i].locationEvent}
					</p>
					<p class='card-text'>
						Data wydarzenia:
						{tickets[i] !== undefined && tickets[i].dateTimeEvent}
					</p>
					<p class='card-text'>
						Cena biletu:
						{tickets[i] !== undefined && tickets[i].priceEvent} zł
					</p>
				</div>
				<button
					type='button'
					class='buttonProduct'
					onClick={(e) => {
						e.preventDefault();
						window.location.href = '/zamowienie?' + tickets[i].idEvent;
					}}>
					Kup bilet
				</button>
			</div>
		);
	}
	for (let i = 3; i < 6; i++) {
		listMainProduct2.push(
			<div class='card'>
				<img className='d-block w-100' src={logo} alt='First slide' />
				<div class='card-body'>
					<h5 class='card-title'>
						{tickets[i] !== undefined && tickets[i].nameEvent}
					</h5>
					<p class='card-text'>
						Lokalizacja:
						{tickets[i] !== undefined && tickets[i].locationEvent}
					</p>
					<p class='card-text'>
						Data wydarzenia:
						{tickets[i] !== undefined && tickets[i].dateTimeEvent}
					</p>
					<p class='card-text'>
						Cena biletu:
						{tickets[i] !== undefined && tickets[i].priceEvent} zł
					</p>
				</div>
				<button class='buttonProduct'>Kup bilet</button>
			</div>
		);
	}
	for (let i = 6; i < 9; i++) {
		listMainProduct3.push(
			<div class='card'>
				<img className='d-block w-100' src={logo} alt='First slide' />
				<div class='card-body'>
					<h5 class='card-title'>
						{tickets[i] !== undefined && tickets[i].nameEvent}
					</h5>
					<p class='card-text'>
						Lokalizacja:
						{tickets[i] !== undefined && tickets[i].locationEvent}
					</p>
					<p class='card-text'>
						Data wydarzenia:
						{tickets[i] !== undefined && tickets[i].dateTimeEvent}
					</p>
					<p class='card-text'>
						Cena biletu:
						{tickets[i] !== undefined && tickets[i].priceEvent} zł
					</p>
				</div>
				<button class='buttonProduct'>Kup bilet</button>
			</div>
		);
	}

	return (
		<div id='frontPage'>
			<h1>Najnowsze wydarzenia</h1>
			<div id='containerFix'>
				<Carousel fade>
					<Carousel.Item interval={5000}>
						<div class='card-deck'>{listMainProduct1}</div>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<div class='card-deck'>{listMainProduct2}</div>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<div class='card-deck'>{listMainProduct3}</div>
					</Carousel.Item>
				</Carousel>
			</div>
			))
		</div>
	);
};

export default Front;
