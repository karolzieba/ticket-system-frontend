import React from 'react';
import Login from "../Login";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';

describe('Login component', () => {
    it("Should render Login component", () => {
        render(
            <Router>
                <Login />
            </Router>
        );
        screen.debug();

        const signInInformation = screen.getByText("LOGOWANIE");
        expect(signInInformation).toBeInTheDocument();

        const inputLogin = screen.getByPlaceholderText("Login");
        const inputPassword = screen.getByPlaceholderText("Hasło");
        const buttonSignIn = screen.getByText("Zaloguj się!");
        const buttonRegister = screen.getByText("Zarejestruj się!");

        expect(inputLogin).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(buttonSignIn).toBeInTheDocument();
        expect(buttonRegister).toBeInTheDocument();
    })
})