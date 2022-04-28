import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './mainpage.css';

const DetalisProducts = () => {
	return (
		<div id='parentDetalisProduct'>
			<div class='card-deck'>
				<div class='card'>
					<img src={logo} class='card-img-top' alt='...' />
					<div class='card-body'>
						<h5 class='card-title'>Card title</h5>
						<p class='card-text'>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</p>
					</div>
					<button class='buttonProduct'>Kup bilet</button>
				</div>
				<div class='card'>
					<img src={logo} class='card-img-top' alt='...' />

					<div class='card-body'>
						<h5 class='card-title'>Card title</h5>
						<p class='card-text'>
							This card has supporting text below as a natural lead-in to
							additional content.
						</p>
					</div>
					<button class='buttonProduct'>Kup bilet</button>
				</div>

				<div class='card'>
					<img src={logo} class='card-img-top' alt='...' />
					<div class='card-body'>
						<h5 class='card-title'>Card title</h5>
						<p class='card-text'>
							This is a wider card with supporting text below as a natural
							lead-in to additional content.
						</p>
					</div>
					<button class='buttonProduct'>Kup bilet</button>
				</div>
			</div>
		</div>
	);
};

export default DetalisProducts;
