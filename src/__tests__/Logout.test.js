import React from 'react';
import Logout from "../Logout";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';

describe('Logout component', () => {
    it("Should render Logout component", () => {
        render(
            <Router>
                <Logout />
            </Router>
        );
        screen.debug();
        const buttonTAK = screen.getByText("TAK");
        const buttonNIE = screen.getByText("NIE");
        expect(buttonTAK).toBeInTheDocument();
        expect(buttonNIE).toBeInTheDocument();
    })
})