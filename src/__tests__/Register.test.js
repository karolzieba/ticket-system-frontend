import React from 'react';
import Register from "../Register";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';

describe('Register component', () => {
    it("Should render Register component", () => {
        render(
            <Router>
                <Register />
            </Router>
        );
        screen.debug();

        const inputModerator = screen.getByDisplayValue("moderator");
        expect(inputModerator).toBeInTheDocument();

        const inputClient = screen.getByDisplayValue("client");
        expect(inputClient).toBeInTheDocument();

        const inputAgency = screen.getByDisplayValue("agency");
        expect(inputAgency).toBeInTheDocument();

        const buttonForm = screen.getByRole("button");
        expect(buttonForm).toBeInTheDocument();
    })
})