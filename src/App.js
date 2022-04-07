import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const axios = require('axios').default;
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input type="radio" id="moderator" name="acctype" value="moderator" checked/>
          <label for="moderator">Moderator</label><br/>
          <input type="radio" id="client" name="acctype" value="client"/>
          <label for="client">Klient</label><br/>
          <input type="radio" id="agency" name="acctype" value="agency"/>
          <label for="agency">Agencja</label>
        </form>
        <br/>
        <form onSubmit={handleSubmit}>
          <input type="text" name="userNameModerator" placeholder="Nazwa użytkownika" value={userNameModerator} onChange={(e) => setUserNameModerator(e.target.value)}/><br/>
          <input type="text" name="emailAccount" placeholder="Login" value={accountLogin} onChange={(e) => setAccountLogin(e.target.value)}/><br/>
          <input type="text" name="accountLogin" placeholder="E-mail" value={emailAccount} onChange={(e) => setEmailAccount(e.target.value)}/><br/>
          <input type="password" name="passwordAccount" placeholder="Hasło" value={passwordAccount} onChange={(e) => setPasswordAccount(e.target.value)}/><br/>
          <input type="submit" value="Zarejestruj" />
      </form>
      </header>
    </div>
  );
}

export default App;
