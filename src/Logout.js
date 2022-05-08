import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const logoutTrue = () => {
        window.location.href = "http://localhost:8080/logout";
    };

    const logoutFalse = () => {
        navigate("/", { replace: true });
    };

    return (
        <div class='login'>
            <text>Czy jesteś pewien że chcesz się wylogować?</text>
            <br/>
            <button class="loginRegisterButton" onClick={logoutTrue}>TAK</button>
            <br/>
            <button class="loginRegisterButton" onClick={logoutFalse}>NIE</button>
        </div>
    )
};

export default Logout;