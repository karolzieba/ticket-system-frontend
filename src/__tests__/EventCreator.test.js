import React from 'react';
import EventCreator from "../Agency/EventCreator";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';

describe('EventCreator component', () => {
    it("Should render EventCreator component", () => {
        render(
            <Router>
                <EventCreator />
            </Router>
        );
        screen.debug();

        const inputTheNameOfTheEvent = screen.getByPlaceholderText("Nazwa wydarzenia");
        expect(inputTheNameOfTheEvent).toBeInTheDocument();
        const inputNumberOfSeats = screen.getByPlaceholderText("Ilość miejsc");
        expect(inputNumberOfSeats).toBeInTheDocument();
        const inputTheDayOfTheEvent = screen.getByPlaceholderText("Dzień wydarzenia");
        expect(inputTheDayOfTheEvent).toBeInTheDocument();
        const inputTime = screen.getByPlaceholderText("Godzina");
        expect(inputTime).toBeInTheDocument();
        const inputPlace = screen.getByPlaceholderText("Miejsce wydarzenia");
        expect(inputPlace).toBeInTheDocument();
        const inputCost = screen.getByPlaceholderText("Koszt wydarzenia");
        expect(inputCost).toBeInTheDocument();
        /*
        const inputCategory = screen.getByTestId("katWydarzenia");
        expect(inputCategory).toBeInTheDocument();
        const inputSubcategory = screen.getByTestId("podkatWydarzenia");
        expect(inputSubcategory).toBeInTheDocument();
        */

    })
})