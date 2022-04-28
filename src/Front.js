import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';

const Front = () => {
	return (
		<div id='frontPage'>
			<h1>Najnowsze wydarzenia</h1>
			<div id='containerFix'>
				<Carousel fade>
					<Carousel.Item interval={5000}>
						<div class='card-deck'>
							<div class='card'>
								<img className='d-block w-100' src={logo} alt='First slide' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>PIERWSZY PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
							<div class='card'>
								<img className='d-block w-100' src={logo} alt='First slide' />

								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>PIERWSZY PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>

							<div class='card'>
								<img className='d-block w-100' src={logo} alt='First slide' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>PIERWSZY PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
							<div class='card'>
								<img className='d-block w-100' src={logo} alt='First slide' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>PIERWSZY PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<div class='card-deck'>
							<div class='card'>
								<img className='d-block w-100' src={logo} alt='Second slide' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>DRUGI PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
							<div class='card'>
								<img className='d-block w-100' src={logo} alt='Second slide' />

								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>DRUGI PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>

							<div class='card'>
								<img className='d-block w-100' src={logo} alt='Second slide' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>DRUGI PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
							<div class='card'>
								<img className='d-block w-100' src={logo} alt='Second slide' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>DRUGI PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<div class='card-deck'>
							<div class='card'>
								<img src={logo} class='d-block w-100' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>TRZECI PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
							<div class='card'>
								<img src={logo} class='d-block w-100' alt='...' />

								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>TRZECI PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>

							<div class='card'>
								<img src={logo} class='d-block w-100' alt='...' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>TRZECI PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
							<div class='card'>
								<img className='d-block w-100' src={logo} alt='Second slide' />
								<div class='card-body'>
									<h5 class='card-title'>Card title</h5>
									<p class='card-text'>DRUGI PANEL</p>
								</div>
								<button class='buttonProduct'>Kup bilet</button>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default Front;
