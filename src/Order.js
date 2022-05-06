import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
const Order = () => {
	const [ticket, setTicket] = useState([]);
	useEffect(() => {
		getTicket();
	}, []);

	
	let {id} = useParams();
	console.log(id);
	function getTicket() {
		axios
			.get('http://localhost:8080/api/event/'+id)
			.then((data) => {
				setTicket(data.data);
			})
			.catch((err) => alert(err));
	}

	console.log(ticket)
	

	return (
		<div id='parentOrder'>
			<h2>{ticket !== undefined && ticket.nameEvent}</h2>
			<h3>{ticket !== undefined && ticket.locationEvent}</h3>
			<h3>{ticket !== undefined && ticket.dateTimeEvent}</h3>
			<h3>{ticket !== undefined && ticket.priceEvent}</h3>
			<button type='submit' >Kup bilet</button>
		</div>
	);
};

export default Order;
