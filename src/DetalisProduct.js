import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const DetalisProducts = () => {
	const [categoryTickets, setCategoryTickets] = useState([]);
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

	useEffect(() => {
		getCategoryTicket();
	}, [location]);

	for (let i = 0; i < categoryTickets.length; i++) {
		if (categoryTickets[i] !== undefined) {
			let idEvent = categoryTickets[i].idEvent;
			let date = new Date(categoryTickets[i].dateTimeEvent);
			date.setMonth(date.getMonth() + 1);

			listOfProduct.push(
				<Row>
					<Col>
						<div class='cardboxdetails'>
							<Link to={'/zamowienie/' + idEvent}>
								<img
									src={'http://localhost:8080/img/' + idEvent + '.png'}
									class='card-picture'
									alt='...'
								/>
								<div class='container'>
									<h5 class='card-title'>{categoryTickets[i].nameEvent}</h5>
									<p class='card-text'>
										Lokalizacja: {categoryTickets[i].locationEvent}
									</p>
									<p class='card-text'>
										Data wydarzenia: {date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()}
									</p>
									<p class='card-text'>
										Cena biletu: {categoryTickets[i].priceEvent} zł
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
		<div class='parentDetalisProduct'>
			<div class='card-deck'>{listOfProduct}</div>
		</div>
	);
};

export default DetalisProducts;
