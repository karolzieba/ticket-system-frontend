import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Facebook from './facebookLogin';

const Login = () => {
	const [accountLogin, setAccountLogin] = useState('');
	const [passwordAccount, setPasswordAccount] = useState('');
	const [loginErr, setLoginErr] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		const axios = require('axios').default;
		axios.defaults.withCredentials = true;
		event.preventDefault();

		let loginData = {
			password: passwordAccount,
			username: accountLogin,
		};

		axios
			.post('http://localhost:8080/login', loginData)
			.then((response) => {
				console.log(response.data);
				navigate("/", { replace: true });
				window.location.reload();
			})
			.catch(function (error) {
				console.log(error);
				setLoginErr(true);
			});
	};
	return (
		<div class='login'>
			<h2>LOGOWANIE</h2>
			{loginErr === true && <p>Wystąpił błąd podczas logowania! Spróbuj ponownie.</p>} 
			<br />
			<form onSubmit={handleSubmit}>
				<input
					class='form-control'
					type='text'
					name='username'
					id='accountLogin'
					placeholder='Login'
					value={accountLogin}
					required
					onChange={(e) => setAccountLogin(e.target.value)}
				/>
				<br/>
				<input
					class='form-control'
					type='password'
					name='password'
					id='passwordAccount'
					placeholder='Hasło'
					value={passwordAccount}
					required
					onChange={(e) => setPasswordAccount(e.target.value)}
				/>
				<br/>
				<input class="loginRegisterButton" type='submit' value='Zaloguj się!' />
			</form>
			<br />
			<Facebook/>
			<br />
			<Link to='/register'>
				<button class="loginRegisterButton" type='button'>Zarejestruj się!</button>
			</Link>
		</div>
	);
};

export default Login;
