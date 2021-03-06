import React, { useState, useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import Front from './Front';
import EventCreator from './Agency/EventCreator';
import AccountManagement from './Moderator/AccountManagement';
import EventManagement from './Moderator/EventManagement';
import OrderManagement from './Moderator/OrderManagement';
import DetalisProducts from './DetalisProduct';
import TraditionalPaymentSuccess from './TraditionalPaymentSuccess';
import PaymentFailed from './PaymentFailed';
import Order from './Order';
import MyOrder from './Client/MyOrder';
import EventList from './Agency/EventList';
import EventUpdate from './Agency/EventUpdate';
import ProtectedRouterAgency from './Agency/ProtectedRouterAgency';
import ProtectedRouterClient from './Client/ProtectedRouterClient';
import ProtectedRouterModerarator from './Moderator/ProtectedRouterModerator';
import ProtectedRouterLogin from './ProtectedRouterLogin';
import {
	ChangeClientData,
	ChangeModeratorData,
	ChangeAgencyData,
} from './ChangeData';
import AboutUs from './aboutus';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
	Link,
} from 'react-router-dom';
import './App.css';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userData, setUserData] = useState('');
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
				if (loggedIn == true) {
					setLoggedIn(false);
					window.location.reload();
				}
			});
	}, []);

	const loginStatus = (status) => {
		setLoggedIn(status);
	};

	const dataToCheck = userData.role;
	console.log(loggedIn);
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<Home loggedIn={loggedIn} userData={userData} />}>
					<Route index element={<Front />} exact />

					<Route path='/logout' element={<Logout />} exact />

					<Route
						path='/zamowienie/:id'
						element={<Order userData={userData} />}
						exact
					/>

					<Route element={<ProtectedRouterLogin loggIn={loggedIn} />}>
						<Route path='/login' element={<Login />} exact />
						<Route path='/register' element={<Register />} exact />
					</Route>

					<Route element={<ProtectedRouterAgency varziable={dataToCheck} />}>
						<Route
							path='/agency/event/creator'
							element={<EventCreator userData={userData} />}
							exact
						/>

						<Route
							path='/agency/event/update'
							element={<EventList userData={userData} />}
						/>
						<Route
							path='/agency/event/creator/update/:idEvent'
							element={<EventUpdate />}
							exact
						/>
						<Route
							path='/agency/changedata'
							element={<ChangeAgencyData userData={userData} />}
							exact
						/>
					</Route>
					<Route element={<ProtectedRouterClient varziable={dataToCheck} />}>
						<Route
							path='/client/orders'
							element={<MyOrder userData={userData} />}
							exact
						/>
						<Route
							path='/client/changedata'
							element={<ChangeClientData userData={userData} />}
							exact
						/>
					</Route>
					<Route
						element={<ProtectedRouterModerarator varziable={dataToCheck} />}>
						<Route
							path='/moderator/account/management'
							element={<AccountManagement userData={userData} />}
							exact
						/>
						<Route
							path='/moderator/event/management'
							element={<EventManagement userData={userData} />}
							exact
						/>
						<Route
							path='/moderator/order/management'
							element={<OrderManagement />}
							exact
						/>

						<Route
							path='/moderator/changedata'
							element={<ChangeModeratorData userData={userData} />}
							exact
						/>
					</Route>
					<Route path='/koncerty/pop' element={<DetalisProducts />} exact />
					<Route path='/koncerty/rap' element={<DetalisProducts />} exact />
					<Route path='/koncerty/rock' element={<DetalisProducts />} exact />
					<Route
						path='/wydarzeniasportowe/pilkanozna'
						element={<DetalisProducts />}
						exact
					/>
					<Route
						path='/wydarzeniasportowe/mma'
						element={<DetalisProducts />}
						exact
					/>
					<Route
						path='/wydarzeniasportowe/tennis'
						element={<DetalisProducts />}
						exact
					/>
					<Route path='/teatr/komedia' element={<DetalisProducts />} exact />
					<Route path='/teatr/dramat' element={<DetalisProducts />} exact />
					<Route path='/teatr/musicale' element={<DetalisProducts />} exact />
					<Route path='/aboutus' element={<AboutUs />} exact />
					<Route
						path='/traditionalpaymentsuccess'
						element={<TraditionalPaymentSuccess />}
						exact
					/>
					<Route path='/paymentfailed' element={<PaymentFailed />} exact />
				</Route>
			</Routes>

			<footer class='py-5 bg-dark'>
				<div class='container'>
					<p class='m-0 text-center text-white'>
						Copyright &copy; 2022 Daniel Rogowski, Damian Przytu??a, Patryk Duda,
						Karol Zi??ba; grupa 3ID13A
						<br />
						<Link to='/aboutus'>O projekcie</Link>
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
