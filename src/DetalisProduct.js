import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const DetalisProducts = () => {
	const [categoryTickets, setCategoryTickets] = useState([]);
	useEffect(() => {
		getCategoryTicket();
	}, []);
	const listOfProduct = [];
	let location = useLocation().pathname.split('/')[2];

	function getCategoryTicket() {
		axios
			.get('http://localhost:8080/api/event/category/' + location)
			.then((data) => {
				setCategoryTickets(data.data);
			})
			.catch((err) => alert(err));
	}
	console.log(categoryTickets);
	for (let i = 0; i < categoryTickets.length; i++) {
		if (categoryTickets[i] !== undefined) {
			let idEvent = categoryTickets[i].idEvent;
			listOfProduct.push(
				<Row>
					<Col>
						<div class='card'>
							<Link to={'/zamowienie/' + idEvent}>
								<img src={logo} class='card-img-top' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>{categoryTickets[i].nameEvent}</h5>
									<p class='card-text'>
										Lokalizacja:
										{categoryTickets[i].locationEvent}
									</p>
									<p class='card-text'>
										Data wydarzenia:
										{categoryTickets[i].dateTimeEvent}
									</p>
									<p class='card-text'>
										Cena biletu:
										{categoryTickets[i].priceEvent} zł
									</p>
								</div>
							</Link>
						</div>
					</Col>
				</Row>
			);
		}
	}

	return (
		<div id='parentDetalisProduct'>
			<div class='card-deck'>{listOfProduct}</div>
		</div>
	);
};

export default DetalisProducts;
