import React from 'react';
import AboutUs from "../aboutus";
import { render, screen } from "@testing-library/react";

describe('Aboutus component', () => {
    it("Should render Aboutus component", () => {
        render(<AboutUs />);
        screen.debug();

        expect(screen.getByText(/Jest to projekt/)).toBeInTheDocument();
    })
})