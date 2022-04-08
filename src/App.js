import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { axios } from 'axios';

function App() {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input type="radio" id="moderator" name="acctype" value="moderator" onChange={(e) => case1()}/>
          <label for="moderator">Moderator</label>
          <input type="radio" id="client" name="acctype" value="client" onChange={(e) => case2()}/>
          <label for="client">Klient</label>
          <input type="radio" id="agency" name="acctype" value="agency" onChange={(e) => case3()}/>
          <label for="agency">Agencja</label>
        </form>
        <br/>
        {moderator == true && <Moderator/>}
        {client == true && <Client/>}
        {agency == true && <Agency/>}
      </header>
    </div>
  );
}

function Moderator() {
  const [userNameModerator, setUserNameModerator] = useState("");
  const [emailAccount, setEmailAccount] = useState("");
  const [accountLogin, setAccountLogin] = useState("");
  const [passwordAccount, setPasswordAccount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/register/moderator', {
      "userNameModerator": userNameModerator,
      "account": {
        "emailAccount": emailAccount,
        "accountLogin": accountLogin,
        "passwordAccount": passwordAccount
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setUserNameModerator("");
    setEmailAccount("");
    setAccountLogin("");
    setPasswordAccount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="emailAccount" placeholder="Login" value={accountLogin} onChange={(e) => setAccountLogin(e.target.value)}/><br/>
      <input type="text" name="accountLogin" placeholder="E-mail" value={emailAccount} onChange={(e) => setEmailAccount(e.target.value)}/><br/>
      <input type="password" name="passwordAccount" placeholder="Hasło" value={passwordAccount} onChange={(e) => setPasswordAccount(e.target.value)}/><br/>
      <input type="text" name="userNameModerator" placeholder="Nazwa moderatora" value={userNameModerator} onChange={(e) => setUserNameModerator(e.target.value)}/><br/>
      <input type="submit" value="Zarejestruj" />
    </form>
  );
}

function Client() {
  const [nameUser, setNameUser] = useState("");
  const [surnameUser, setSurnameUser,] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAccount, setEmailAccount] = useState("");
  const [accountLogin, setAccountLogin] = useState("");
  const [passwordAccount, setPasswordAccount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/register/client', {
      "nameUser": nameUser,
      "surnameUser": surnameUser,
      "dateOfBirth": dateOfBirth,
      "phoneNumber": phoneNumber,
      "account": {
        "emailAccount": emailAccount,
        "accountLogin": accountLogin,
        "passwordAccount": passwordAccount
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setNameUser("");
    setSurnameUser("");
    setDateOfBirth("");
    setPhoneNumber("");
    setEmailAccount("");
    setAccountLogin("");
    setPasswordAccount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="emailAccount" placeholder="Login" value={accountLogin} onChange={(e) => setAccountLogin(e.target.value)}/><br/>
      <input type="text" name="accountLogin" placeholder="E-mail" value={emailAccount} onChange={(e) => setEmailAccount(e.target.value)}/><br/>
      <input type="password" name="passwordAccount" placeholder="Hasło" value={passwordAccount} onChange={(e) => setPasswordAccount(e.target.value)}/><br/>
      <input type="text" name="nameUser" placeholder="Imię" value={nameUser} onChange={(e) => setNameUser(e.target.value)}/><br/>
      <input type="text" name="surnameUser" placeholder="Nazwisko" value={surnameUser} onChange={(e) => setSurnameUser(e.target.value)}/><br/>
      <input type="text" name="dateOfBirth" placeholder="Data urodzenia" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/><br/>
      <input type="text" name="phoneNumber" placeholder="Numer telefonu" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/><br/>
      <input type="submit" value="Zarejestruj" />
    </form>
  );
}

function Agency() {
  const [nameCompany, setNameCompany] = useState("");
  const [NIP, setNIP] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [emailAccount, setEmailAccount] = useState("");
  const [accountLogin, setAccountLogin] = useState("");
  const [passwordAccount, setPasswordAccount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/register/moderator', {
      "nameCompany": nameCompany,
      "NIP": NIP,
      "numberPhone": numberPhone,
      "account": {
        "emailAccount": emailAccount,
        "accountLogin": accountLogin,
        "passwordAccount": passwordAccount
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setNameCompany("");
    setNIP("");
    setNumberPhone("");
    setEmailAccount("");
    setAccountLogin("");
    setPasswordAccount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="emailAccount" placeholder="Login" value={accountLogin} onChange={(e) => setAccountLogin(e.target.value)}/><br/>
      <input type="text" name="accountLogin" placeholder="E-mail" value={emailAccount} onChange={(e) => setEmailAccount(e.target.value)}/><br/>
      <input type="password" name="passwordAccount" placeholder="Hasło" value={passwordAccount} onChange={(e) => setPasswordAccount(e.target.value)}/><br/>
      <input type="text" name="nameCompany" placeholder="Nazwa firmy" value={nameCompany} onChange={(e) => setNameCompany(e.target.value)}/><br/>
      <input type="text" name="NIP" placeholder="NIP" value={NIP} onChange={(e) => setNIP(e.target.value)}/><br/>
      <input type="text" name="numberPhone" placeholder="Numer telefonu" value={numberPhone} onChange={(e) => setNumberPhone(e.target.value)}/><br/>
      <input type="submit" value="Zarejestruj" />
    </form>
  );
}

export default App;
