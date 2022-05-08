import React, { useState, useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import Front from './Front';
import EventCreator from './Agency/EventCreator';
import DetalisProducts from './DetalisProduct';
import Order from './Order';
import AboutUs from './aboutus';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userData, setUserData] = useState("");
	const location = useLocation().pathname.split('/')[2];

	useEffect(() => {
		const axios = require('axios').default;
		axios.defaults.withCredentials = true;

		axios
			.get('http://localhost:8080/getInfo')
			.then(function (response) {
				setLoggedIn(true);
				setUserData(response.data);
			})
			.catch(function (error) {
				setLoggedIn(false);
			});
	}, [location]);

	const loginStatus = (status) => {
		setLoggedIn(status);
	}

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home loggedIn={loggedIn} userData={userData} />}>
					<Route index element={<Front />} exact />
					<Route path='/login' element={<Login />} exact />
					<Route path='/logout' element={<Logout />} exact />
					<Route path='/register' element={<Register />} exact />
					<Route path='/zamowienie/:id' element={<Order />} exact />
					<Route path='/agency/event/creator' element={<EventCreator userData={userData} />} exact />
					<Route path='/koncerty/:pop' element={<DetalisProducts />} exact />
					<Route path='/koncerty/rap' element={<DetalisProducts />} exact />
					<Route path='/koncerty/rock' element={<DetalisProducts />} exact />
					<Route path='/wydarzeniasportowe/pilkanozna' element={<DetalisProducts />} exact />
					<Route path='/wydarzeniasportowe/mma' element={<DetalisProducts />} exact />
					<Route path='/wydarzeniasportowe/tennis' element={<DetalisProducts />} exact />
					<Route path='/teatr/komedia' element={<DetalisProducts />} exact />
					<Route path='/teatr/dramat' element={<DetalisProducts />} exact />
					<Route path='/teatr/musicale' element={<DetalisProducts />} exact />
					<Route path='/aboutus' element={<AboutUs />} exact />
				</Route>
			</Routes>

			<footer class='py-5 bg-dark'>
				<div class='container'>
					<p class='m-0 text-center text-white'>
						Copyright &copy; Daniel Rogowski, Damian Przytuła, Patryk Duda,
						Karol Zięba 2022
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
