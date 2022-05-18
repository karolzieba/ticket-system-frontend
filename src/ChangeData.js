import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export const ChangeClientData = ( { userData } ) => {
	const axios = require('axios').default;
	axios.defaults.withCredentials = true;

	const [nameUser, setNameUser] = useState(null);
	const [surName, setSurName] = useState(null);
	const [dateOfBirth, setDateOfBirth] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [numberAccountBank, setNumberAccountBank] = useState(null);
	const [emailAccount, setEmailAccount] = useState(null);
	const [accountLogin, setAccountLogin] = useState(null);
	const [passwordAccount, setPasswordAccount] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.patch('http://localhost:8080/api/client/' + userData.idRole, {
				nameUser: nameUser,
				surName: surName,
				dateOfBirth: dateOfBirth,
				phoneNumber: phoneNumber,
				numberAccountBank: numberAccountBank,
				account: {
					emailAccount: emailAccount,
					username: accountLogin,
					password: passwordAccount,
				},
			})
			.then(function (response) {
				console.log(response);
				navigate("/", { replace: true });
			})
			.catch(function (error) {
				console.log(error);
			});

		/*if(userData.role === "ROLE_CLIENT") {
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
		}
		else if(userData.role === "ROLE_CLIENT_FACEBOOK") {
			sendData('client', {
				dateOfBirth: dateOfBirth,
				phoneNumber: phoneNumber
			});
		}*/

		setNameUser('');
		setSurName('');
		setDateOfBirth('');
		setPhoneNumber('');
		setEmailAccount('');
		setAccountLogin('');
		setPasswordAccount('');
	};

	return (
		<div className='register'>
			<h2>ZARZĄDZANIE KONTEM</h2>
			<h3>Rodzaj konta: {userData.role === "ROLE_CLIENT"?"Klient":"Klient - Facebook"}</h3>
			{userData.role === "ROLE_CLIENT" && <p>Uwaga! Jeżeli zostanie zmieniony login będzie wymagane ponowne zalogowanie się.</p>}
			<br />
			<form onSubmit={handleSubmit}>
				{userData.role === "ROLE_CLIENT" && <input
					class='form-control'
					type='text'
					id='accountLogin'
					placeholder='Login'
					value={accountLogin}
					onChange={(e) => setAccountLogin(e.target.value)}
				/>}
				{userData.role === "ROLE_CLIENT" && <input
					class='form-control'
					type='text'
					id='emailAccount'
					placeholder='E-mail'
					value={emailAccount}
					onChange={(e) => setEmailAccount(e.target.value)}
				/>}
				{userData.role === "ROLE_CLIENT" && <input
					class='form-control'
					type='password'
					id='passwordAccount'
					placeholder='Hasło'
					value={passwordAccount}
					onChange={(e) => setPasswordAccount(e.target.value)}
				/>}
				{userData.role === "ROLE_CLIENT" && <input
					class='form-control'
					type='text'
					id='nameUser'
					placeholder='Imię'
					value={nameUser}
					onChange={(e) => setNameUser(e.target.value)}
				/>}
				{userData.role === "ROLE_CLIENT" && <input
					class='form-control'
					type='text'
					id='surName'
					placeholder='Nazwisko'
					value={surName}
					onChange={(e) => setSurName(e.target.value)}
				/>}
				<input
					class='form-control'
					type='date'
					id='dateOfBirth'
					placeholder='Data urodzenia'
					value={dateOfBirth}
					onChange={(e) => setDateOfBirth(e.target.value)}
				/>
				<input
					class='form-control'
					type='text'
					id='phoneNumber'
					placeholder='Numer telefonu'
					maxlength='9'
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
				<input
					class='form-control'
					type='text'
					id='numberAccountBank'
					placeholder='Numer konta bankowego'
					maxlength='26'
					value={numberAccountBank}
					onChange={(e) => setNumberAccountBank(e.target.value)}
				/>
				<input class="loginRegisterButton" type='submit' value='Zmień dane' />
			</form>
		</div>
	);
};

export const ChangeModeratorData = ( { userData }) => {
	const axios = require('axios').default;
	axios.defaults.withCredentials = true;

	const [userNameModerator, setUserNameModerator] = useState(null);
	const [emailAccount, setEmailAccount] = useState(null);
	const [accountLogin, setAccountLogin] = useState(null);
	const [passwordAccount, setPasswordAccount] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.patch('http://localhost:8080/api/moderator/' + userData.idRole, {
				userNameModerator: userNameModerator,
				account: {
					emailAccount: emailAccount,
					username: accountLogin,
					password: passwordAccount,
				}
			})
			.then(function (response) {
				console.log(response);
				navigate("/", { replace: true });
			})
			.catch(function (error) {
				console.log(error);
			});

		setEmailAccount('');
		setAccountLogin('');
		setPasswordAccount('');
		setUserNameModerator('');
	};

	return (
		<div className='register'>
			<h2>ZARZĄDZANIE KONTEM</h2>
			<h3>Rodzaj konta: Moderator</h3>
			<p>Uwaga! Jeżeli zostanie zmieniony login będzie wymagane ponowne zalogowanie się.</p>
			<br />	
			<form onSubmit={handleSubmit}>
				<input
					class='form-control'
					type='text'
					id='accountLogin'
					placeholder='Login'
					value={accountLogin}
					onChange={(e) => setAccountLogin(e.target.value)}
				/>
				<input
					class='form-control'
					type='text'
					id='emailAccount'
					placeholder='E-mail'
					value={emailAccount}
					onChange={(e) => setEmailAccount(e.target.value)}
				/>
				<input
					class='form-control'
					type='password'
					id='passwordAccount'
					placeholder='Hasło'
					value={passwordAccount}
					onChange={(e) => setPasswordAccount(e.target.value)}
				/>
				<input
					class='form-control'
					type='text'
					id='userNameModerator'
					placeholder='Nazwa wyśw. moderatora'
					value={userNameModerator}
					onChange={(e) => setUserNameModerator(e.target.value)}
				/>
				<input class="loginRegisterButton" type='submit' value='Zmień dane' />
			</form>
		</div>
	);
};

export const ChangeAgencyData = ( { userData }) => {
	const axios = require('axios').default;
	axios.defaults.withCredentials = true;

	const [nameCompany, setNameCompany] = useState(null);
	const [NIP, setNIP] = useState(null);
	const [numberPhone, setNumberPhone] = useState(null);
	const [emailAccount, setEmailAccount] = useState(null);
	const [accountLogin, setAccountLogin] = useState(null);
	const [passwordAccount, setPasswordAccount] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.patch('http://localhost:8080/api/agency/' + userData.idRole, {
				nameCompany: nameCompany,
				nip: NIP,
				numberPhone: numberPhone,
				account: {
					emailAccount: emailAccount,
					username: accountLogin,
					password: passwordAccount,
				}
			})
			.then(function (response) {
				console.log(response);
				navigate("/", { replace: true });
			})
			.catch(function (error) {
				console.log(error);
			});

		setNameCompany('');
		setNIP('');
		setNumberPhone('');
		setEmailAccount('');
		setAccountLogin('');
		setPasswordAccount('');
	};

	return (
		<div className='register'>
			<h2>ZARZĄDZANIE KONTEM</h2>
			<h3>Rodzaj konta: Agencja</h3>
			<p>Uwaga! Jeżeli zostanie zmieniony login będzie wymagane ponowne zalogowanie się.</p>
			<br />	
			<form onSubmit={handleSubmit}>
				<input
					class='form-control'
					type='text'
					id='accountLogin'
					placeholder='Login'
					value={accountLogin}
					onChange={(e) => setAccountLogin(e.target.value)}
				/>
				<input
					class='form-control'
					type='text'
					id='emailAccount'
					placeholder='E-mail'
					value={emailAccount}
					onChange={(e) => setEmailAccount(e.target.value)}
				/>
				<input
					class='form-control'
					type='password'
					id='passwordAccount'
					placeholder='Hasło'
					value={passwordAccount}
					onChange={(e) => setPasswordAccount(e.target.value)}
				/>
				<input
					class='form-control'
					type='text'
					id='nameCompany'
					placeholder='Nazwa firmy'
					value={nameCompany}
					onChange={(e) => setNameCompany(e.target.value)}
				/>
				<input
					class='form-control'
					type='text'
					id='NIP'
					placeholder='NIP'
					maxlength='10'
					value={NIP}
					onChange={(e) => setNIP(e.target.value)}
				/>
				<input
					class='form-control'
					type='text'
					id='numberPhone'
					placeholder='Numer telefonu'
					maxlength='9'
					value={numberPhone}
					onChange={(e) => setNumberPhone(e.target.value)}
				/>
				<input class="loginRegisterButton" type='submit' value='Zarejestruj' />
			</form>
		</div>
	);
};
