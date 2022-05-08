import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Facebook = () => {
    return (
        <div>
            <a href="http://localhost:8080/oauth2/authorization/facebook"><button id="facebookButton">Zaloguj się za pomocą Facebook</button></a>
        </div>
    );
}

export default Facebook;