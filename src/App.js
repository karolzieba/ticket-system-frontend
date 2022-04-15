import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { getValue } from '@testing-library/user-event/dist/utils';

function sendData(type, dataToSend) {
  const axios = require('axios').default;
  let url = 'http://localhost:8080/register';

  if(type === 'moderator') {
    url += '/moderator';
  }
  else if(type === 'client') {
    url += '/client';
  }
  else if(type === 'agency') {
    url += '/agency';
  }

  if(url !== 'http://localhost:8080/register') {
    axios.post(url, dataToSend)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

const App = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  function case1() {
    setLogin(true);
    setRegister(false);
  }

  function case2() {
    setLogin(false);
    setRegister(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form>
            <Form.Check type="radio" id="login" name="action" label="Logowanie" value="login" onChange={(e) => case1()}/>
            <Form.Check type="radio" id="register" name="action" label="Rejestracja" value="register" onChange={(e) => case2()}/>
        </Form>
        {login == true && <Login/>}
        {register == true && <Register/>}
      </header>
    </div>
  );
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
    <div className="App">
      <h2>REJESTRACJA</h2>
      <Form>
        <Form.Check type="radio" id="moderator" name="acctype" label="Moderator" value="moderator" onChange={(e) => case1()}/>
        <Form.Check type="radio" id="client" name="acctype" label="Klient" value="client" onChange={(e) => case2()}/>
        <Form.Check type="radio" id="agency" name="acctype" label="Agencja" value="agency" onChange={(e) => case3()}/>
      </Form>
      <br/>
      {moderator == true && <Moderator/>}
      {client == true && <Client/>}
      {agency == true && <Agency/>}
  </div>
  );
}

const Moderator = () => {
  const [userNameModerator, setUserNameModerator] = useState("");
  const [emailAccount, setEmailAccount] = useState("");
  const [accountLogin, setAccountLogin] = useState("");
  const [passwordAccount, setPasswordAccount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    sendData('moderator', {
      "userNameModerator": userNameModerator,
      "account": {
        "emailAccount": emailAccount,
        "accountLogin": accountLogin,
        "passwordAccount": passwordAccount
      }
    });
    
    setEmailAccount("");
    setAccountLogin("");
    setPasswordAccount("");
    setUserNameModerator("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="moderatorregister" id="accountLogin" placeholder="Login" value={accountLogin} required onChange={(e) => setAccountLogin(e.target.value)}/><br/>
      <input type="text" name="moderatorregister" id="emailAccount" placeholder="E-mail" value={emailAccount} required onChange={(e) => setEmailAccount(e.target.value)}/><br/>
      <input type="password" name="moderatorregister" id="passwordAccount" placeholder="Hasło" value={passwordAccount} required onChange={(e) => setPasswordAccount(e.target.value)}/><br/>
      <input type="text" name="moderatorregister" id="userNameModerator" placeholder="Nazwa wyśw. moderatora" value={userNameModerator} required onChange={(e) => setUserNameModerator(e.target.value)}/><br/>
      <input type="submit" value="Zarejestruj" />
    </form>
  );
}

const Client = () => {
  const [nameUser, setNameUser] = useState("");
  const [surName, setSurName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAccount, setEmailAccount] = useState("");
  const [accountLogin, setAccountLogin] = useState("");
  const [passwordAccount, setPasswordAccount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    sendData('client', {
      "nameUser": nameUser,
      "surName": surName,
      "dateOfBirth": dateOfBirth,
      "phoneNumber": phoneNumber,
      "account": {
        "emailAccount": emailAccount,
        "accountLogin": accountLogin,
        "passwordAccount": passwordAccount
      }
    });

    setNameUser("");
    setSurName("");
    setDateOfBirth("");
    setPhoneNumber("");
    setEmailAccount("");
    setAccountLogin("");
    setPasswordAccount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="clientregister" id="accountLogin" placeholder="Login" value={accountLogin} required onChange={(e) => setAccountLogin(e.target.value)}/><br/>
      <input type="text" name="clientregister" id="emailAccount" placeholder="E-mail" value={emailAccount} required onChange={(e) => setEmailAccount(e.target.value)}/><br/>
      <input type="password" name="clientregister" id="passwordAccount" placeholder="Hasło" value={passwordAccount} required onChange={(e) => setPasswordAccount(e.target.value)}/><br/>
      <input type="text" name="clientregister" id="nameUser" placeholder="Imię" value={nameUser} required onChange={(e) => setNameUser(e.target.value)}/><br/>
      <input type="text" name="clientregister" id="surName" placeholder="Nazwisko" value={surName} required onChange={(e) => setSurName(e.target.value)}/><br/>
      <input type="date" name="clientregister" id="dateOfBirth" placeholder="Data urodzenia" value={dateOfBirth} required onChange={(e) => setDateOfBirth(e.target.value)}/><br/>
      <input type="text" name="clientregister" id="phoneNumber" placeholder="Numer telefonu" maxlength="9" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)}/><br/>
      <input type="submit" value="Zarejestruj" />
    </form>
  );
}

const Agency = () => {
  const [nameCompany, setNameCompany] = useState("");
  const [NIP, setNIP] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [emailAccount, setEmailAccount] = useState("");
  const [accountLogin, setAccountLogin] = useState("");
  const [passwordAccount, setPasswordAccount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    sendData('agency', {
      "nameCompany": nameCompany,
      "nip": NIP,
      "numberPhone": numberPhone,
      "account": {
        "emailAccount": emailAccount,
        "accountLogin": accountLogin,
        "passwordAccount": passwordAccount
      }
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
      <input type="text" name="agencyregister" id="accountLogin" placeholder="Login" value={accountLogin} required onChange={(e) => setAccountLogin(e.target.value)}/><br/>
      <input type="text" name="agencyregister" id="emailAccount" placeholder="E-mail" value={emailAccount} required onChange={(e) => setEmailAccount(e.target.value)}/><br/>
      <input type="password" name="agencyregister" id="passwordAccount" placeholder="Hasło" value={passwordAccount} required onChange={(e) => setPasswordAccount(e.target.value)}/><br/>
      <input type="text" name="agencyregister" id="nameCompany" placeholder="Nazwa firmy" value={nameCompany} required onChange={(e) => setNameCompany(e.target.value)}/><br/>
      <input type="text" name="agencyregister" id="NIP" placeholder="NIP" maxlength="10" value={NIP} required onChange={(e) => setNIP(e.target.value)}/><br/>
      <input type="text" name="agencyregister" id="numberPhone" placeholder="Numer telefonu" maxlength="9" value={numberPhone} required onChange={(e) => setNumberPhone(e.target.value)}/><br/>
      <input type="submit" value="Zarejestruj" />
    </form>
  );
}

const Login = () => {
  const [accountLogin, setAccountLogin] = useState("");
  const [passwordAccount, setPasswordAccount] = useState("");
  
  const handleSubmit = (event) => {
    const axios = require('axios').default;
    event.preventDefault();
    axios.defaults.withCredentials = true

    const form = new FormData();
    form.append("username", accountLogin); 
    form.append("password", passwordAccount);
    
    
    axios.post('http://localhost:8080/login', form).then((response) => {
      
    if(response.request.responseURL == 'http://localhost:8080/index')
    {
      window.location='/index';
    }
    
    else
    {
      console.log("Błąd logowania");
    }
      
        

    })
    .catch(function (error) {
      console.log(error);
    });
   
  };
  return (
    <div class="App">
      <h2>LOGOWANIE</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="accountLogin" placeholder="Login" value={accountLogin} 
        required onChange={(e) => setAccountLogin(e.target.value)}/><br/>
        <input type="password" name="password" id="passwordAccount" placeholder="Hasło" value={passwordAccount} 
        required onChange={(e) => setPasswordAccount(e.target.value)}/><br/>
        <input type="submit" value="Zaloguj" />
      </form>
      <br/>
    </div>
  );
}

export default App;
