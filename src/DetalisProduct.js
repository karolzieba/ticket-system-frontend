import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './mainpage.css';

const DetalisProducts = () => {
	const listOfProduct = [];
	for (let i = 0; i < 3; i++) {
		listOfProduct.push(
			<div class='card'>
				<img src={logo} class='card-img-top' alt='...' />
				<div class='card-body'>
					<h5 class='card-title'>Card title</h5>
					<p class='card-text'>Element number: {i}</p>
				</div>
				<button class='buttonProduct'>Kup bilet</button>
			</div>
		);
	}

	return (
		<div id='parentDetalisProduct'>
			<div class='card-deck'>{listOfProduct}</div>
		</div>
	);
};

export default DetalisProducts;
