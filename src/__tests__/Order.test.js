import React from 'react';
import Order from "../Order";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';

describe('Order component', () => {
    it("Should render Order component", () => {
        render(
            <Router>
                <Order />
            </Router>
        );
        screen.debug();

        const divCardDeck = screen.getByTestId("card-deck");
        expect(divCardDeck).toBeInTheDocument();
    })
})