import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Login = () => {
	const [accountLogin, setAccountLogin] = useState('');
	const [passwordAccount, setPasswordAccount] = useState('');
	const [rememberMe, setRemember] = useState();

	const handleSubmit = (event) => {
		const axios = require('axios').default;
		event.preventDefault();

		let loginData = {
			password: passwordAccount,
			username: accountLogin,
		};

		axios
			.post('http://localhost:8080/login', loginData, { withCredentials: true })
			.then((response) => {
				/*if(!(response.request.responseURL.includes('?')))
      {
        window.location='http://localhost:8080/index';
      }
      
      else
      {
        console.log("Błąd logowania");
      }*/

				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div class='login'>
			<h2>LOGOWANIE</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					id='accountLogin'
					placeholder='Login'
					value={accountLogin}
					required
					onChange={(e) => setAccountLogin(e.target.value)}
				/>
				<br />
				<input
					type='password'
					name='password'
					id='passwordAccount'
					placeholder='Hasło'
					value={passwordAccount}
					required
					onChange={(e) => setPasswordAccount(e.target.value)}
				/>
				<br />
				<input
					type='checkbox'
					name='rememberme'
					id='rememberme'
					placeholder='Pamiętaj mnie'
					value={rememberMe}
					onChange={(e) => setRemember(e.target.value)}
				/>
				<br />
				<input type='submit' value='Zaloguj' />
			</form>
			<br />

			<Link to='/register'>
				<button type='button'>Zarejestruj się!</button>
			</Link>
		</div>
	);
};

export default Login;
