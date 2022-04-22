import React from "react";
import './App.css';

import { Link } from 'react-router-dom';

const Home = () => {


    return (

        <div id="homeContainer">

        <h1>Witaj na naszej stronie</h1>
    <div id="buttonHome">

        <Link to="/register">
            <button type="button">
                Zarejestruj się!
            </button>
        </Link>
    
    
        <Link to="/login">
            <button type="button">
                Zaloguj się!
            </button>
        </Link>
    </div>
      


        </div>
    );


}

export default Home;