import React from 'react';
import Home from "../Home";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';

describe('Home component', () => {
    it("Should render Home component", () => {
        render(
                    <Router>
                        <Home
                            loggedIn = "false"
                        />
                    </Router>
                );
        screen.debug();

        /*
        const buttonSignIn = screen.getByText("Zaloguj się");
        const buttonLogOut = screen.getByText("Wyloguj się");
        expect(buttonSignIn).toBeInTheDocument();
        expect(buttonLogOut).not.toBeInTheDocument();
        */
    })
})