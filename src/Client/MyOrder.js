import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.svg';
const MyOrder = ({ userData }) => {
	const [dataTicket, setDataTicket] = useState([]);

	useEffect(() => {
		getTicketsOrder();
	}, []);

	function getTicketsOrder() {
		axios
			.get('http://localhost:8080/api/event/client/orders/' + userData.id)
			.then((data) => {
				console.log(data.data);
				setDataTicket(data.data);
			})
			.catch((err) => alert(err));
	}

	const listTicket = [];

	for (let i = 0; i < dataTicket.length; i++) {
		if (dataTicket[i] !== undefined) {
			listTicket.push(
				<div class='card'>
					<img
						src={'http://localhost:8080/img/' + dataTicket[i][0] + '.png'}
						class='card-img-top'
						alt='...'
					/>
					<div class='card-body'>
						<h5 class='card-title'>{dataTicket[i][4]}</h5>
						<p class='card-text'>
							Lokalizacja:
							{dataTicket[i][3]}
						</p>
						<p class='card-text'>
							Data wydarzenia:
							{dataTicket[i][4]}
						</p>
						<p class='card-text'>
							Organizator wydarzenia:
							{dataTicket[i][6]}
						</p>
					</div>
				</div>
			);
		}
	}

	/*
0 - idEvent
1 - CapacityEvent
2 - DateTimeEvent
3 - LocationEvent
4 - NameEvent
5 - PriceEvent
6 - nameCompany

*/
	return (
		<div class='parentDetalisProduct'>
			<div class='card-deck'>{listTicket}</div>
		</div>
	);
};
export default MyOrder;
