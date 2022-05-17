import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrder = ({ userData }) => {
	const [dataTicket, setDataTicket] = useState([]);

	useEffect(() => {
		getTicketsOrder();
	}, []);

	function getTicketsOrder() {
		axios
			.get('http://localhost:8080/api/ticket/client/' + userData.idRole)
			.then((data) => {
				console.log(data.data);
				setDataTicket(data.data);
			})
			.catch((err) => alert(err));
	}

	const listTicket = [];

	for (let i = 0; i < dataTicket.length; i++) {
		if (dataTicket[i] !== undefined && dataTicket[i].event !== undefined && dataTicket[i].event.agency !== undefined && dataTicket[i].payment.endDatePayment !== null) {
			let date = new Date(dataTicket[i].event.dateTimeEvent);
			date.setMonth(date.getMonth() + 1);

			listTicket.push(
				<div class='card'>
					<img
						src={'http://localhost:8080/img/' + dataTicket[i].event.idEvent + '.png'}
						class='card-img-top'
						alt='...'
					/>
					<div class='card-body'>
						<h5 class='card-title'>{dataTicket[i].event.nameEvent}</h5>
						<p class='card-text'>
							Lokalizacja: {dataTicket[i].event.locationEvent}
						</p>
						<p class='card-text'>
							Data wydarzenia: {date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()}
						</p>
						<p class='card-text'>
							Organizator wydarzenia: {dataTicket[i].event.agency.nameCompany}
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
			<div data-testid='card-deck' class='card-deck'>{listTicket}</div>
			{listTicket.length === 0 && <h2>Brak dostępnych biletów.</h2>}
		</div>
	);
};
export default MyOrder;
