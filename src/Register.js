import './App.css';

import { useState, useEffect } from 'react';
import { axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { getValue } from '@testing-library/user-event/dist/utils';

import { Link } from 'react-router-dom';

function sendData(type, dataToSend) {
	const axios = require('axios').default;
	axios.defaults.withCredentials = true;
	let url = 'http://localhost:8080/register';

	if (type === 'moderator') {
		url += '/moderator';
	} else if (type === 'client') {
		url += '/client';
	} else if (type === 'agency') {
		url += '/agency';
	}

	if (url !== 'http://localhost:8080/register') {
		axios
			.post(url, dataToSend)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}

const Register = () => {
	const [moderator, setModerator] = useState(false);
	const [client, setClient] = useState(false);
	const [agency, setAgency] = useState(false);

	function case1() {
		setModerator(true);
		setClient(false);
		setAgency(false);
	}

	function case2() {
		setModerator(false);
		setClient(true);
		setAgency(false);
	}

	function case3() {
		setModerator(false);
		setClient(false);
		setAgency(true);
	}

	return (
		<div className='register'>
			<h2>REJESTRACJA</h2>
			<Form>
				<Form.Check
					type='radio'
					id='moderator'
					name='acctype'
					label='Moderator'
					value='moderator'
					onChange={(e) => case1()}
				/>
				<Form.Check
					type='radio'
					id='client'
					name='acctype'
					label='Klient'
					value='client'
					onChange={(e) => case2()}
				/>
				<Form.Check
					type='radio'
					id='agency'
					name='acctype'
					label='Agencja'
					value='agency'
					onChange={(e) => case3()}
				/>
			</Form>
			<br />
			{moderator == true && <Moderator />}
			{client == true && <Client />}
			{agency == true && <Agency />}

			<br></br>
			<Link to='/login'>
				<button class="loginRegisterButton" type='button'>Zaloguj się!</button>
			</Link>
		</div>
	);
};

const Moderator = () => {
	const [userNameModerator, setUserNameModerator] = useState('');
	const [emailAccount, setEmailAccount] = useState('');
	const [accountLogin, setAccountLogin] = useState('');
	const [passwordAccount, setPasswordAccount] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		sendData('moderator', {
			userNameModerator: userNameModerator,
			account: {
				emailAccount: emailAccount,
				username: accountLogin,
				password: passwordAccount,
			},
		});

		setEmailAccount('');
		setAccountLogin('');
		setPasswordAccount('');
		setUserNameModerator('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='moderatorregister'
				id='accountLogin'
				placeholder='Login'
				value={accountLogin}
				required
				onChange={(e) => setAccountLogin(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='moderatorregister'
				id='emailAccount'
				placeholder='E-mail'
				value={emailAccount}
				required
				onChange={(e) => setEmailAccount(e.target.value)}
			/>
			<br />
			<input
				type='password'
				name='moderatorregister'
				id='passwordAccount'
				placeholder='Hasło'
				value={passwordAccount}
				required
				onChange={(e) => setPasswordAccount(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='moderatorregister'
				id='userNameModerator'
				placeholder='Nazwa wyśw. moderatora'
				value={userNameModerator}
				required
				onChange={(e) => setUserNameModerator(e.target.value)}
			/>
			<br />
			<input class="loginRegisterButton" type='submit' value='Zarejestruj' />
		</form>
	);
};

const Client = () => {
	const [nameUser, setNameUser] = useState('');
	const [surName, setSurName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [emailAccount, setEmailAccount] = useState('');
	const [accountLogin, setAccountLogin] = useState('');
	const [passwordAccount, setPasswordAccount] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		sendData('client', {
			nameUser: nameUser,
			surName: surName,
			dateOfBirth: dateOfBirth,
			phoneNumber: phoneNumber,
			account: {
				emailAccount: emailAccount,
				username: accountLogin,
				password: passwordAccount,
			},
		});

		setNameUser('');
		setSurName('');
		setDateOfBirth('');
		setPhoneNumber('');
		setEmailAccount('');
		setAccountLogin('');
		setPasswordAccount('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='clientregister'
				id='accountLogin'
				placeholder='Login'
				value={accountLogin}
				required
				onChange={(e) => setAccountLogin(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='clientregister'
				id='emailAccount'
				placeholder='E-mail'
				value={emailAccount}
				required
				onChange={(e) => setEmailAccount(e.target.value)}
			/>
			<br />
			<input
				type='password'
				name='clientregister'
				id='passwordAccount'
				placeholder='Hasło'
				value={passwordAccount}
				required
				onChange={(e) => setPasswordAccount(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='clientregister'
				id='nameUser'
				placeholder='Imię'
				value={nameUser}
				required
				onChange={(e) => setNameUser(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='clientregister'
				id='surName'
				placeholder='Nazwisko'
				value={surName}
				required
				onChange={(e) => setSurName(e.target.value)}
			/>
			<br />
			<input
				type='date'
				name='clientregister'
				id='dateOfBirth'
				placeholder='Data urodzenia'
				value={dateOfBirth}
				required
				onChange={(e) => setDateOfBirth(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='clientregister'
				id='phoneNumber'
				placeholder='Numer telefonu'
				maxlength='9'
				value={phoneNumber}
				required
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>
			<br />
			<input class="loginRegisterButton" type='submit' value='Zarejestruj' />
		</form>
	);
};

const Agency = () => {
	const [nameCompany, setNameCompany] = useState('');
	const [NIP, setNIP] = useState('');
	const [numberPhone, setNumberPhone] = useState('');
	const [emailAccount, setEmailAccount] = useState('');
	const [accountLogin, setAccountLogin] = useState('');
	const [passwordAccount, setPasswordAccount] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		sendData('agency', {
			nameCompany: nameCompany,
			nip: NIP,
			numberPhone: numberPhone,
			account: {
				emailAccount: emailAccount,
				username: accountLogin,
				password: passwordAccount,
			},
		});

		setNameCompany('');
		setNIP('');
		setNumberPhone('');
		setEmailAccount('');
		setAccountLogin('');
		setPasswordAccount('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='agencyregister'
				id='accountLogin'
				placeholder='Login'
				value={accountLogin}
				required
				onChange={(e) => setAccountLogin(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='agencyregister'
				id='emailAccount'
				placeholder='E-mail'
				value={emailAccount}
				required
				onChange={(e) => setEmailAccount(e.target.value)}
			/>
			<br />
			<input
				type='password'
				name='agencyregister'
				id='passwordAccount'
				placeholder='Hasło'
				value={passwordAccount}
				required
				onChange={(e) => setPasswordAccount(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='agencyregister'
				id='nameCompany'
				placeholder='Nazwa firmy'
				value={nameCompany}
				required
				onChange={(e) => setNameCompany(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='agencyregister'
				id='NIP'
				placeholder='NIP'
				maxlength='10'
				value={NIP}
				required
				onChange={(e) => setNIP(e.target.value)}
			/>
			<br />
			<input
				type='text'
				name='agencyregister'
				id='numberPhone'
				placeholder='Numer telefonu'
				maxlength='9'
				value={numberPhone}
				required
				onChange={(e) => setNumberPhone(e.target.value)}
			/>
			<br />
			<input class="loginRegisterButton" type='submit' value='Zarejestruj' />
		</form>
	);
};

export default Register;
