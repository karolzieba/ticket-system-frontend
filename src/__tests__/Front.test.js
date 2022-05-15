import React from 'react';
import Front from "../Front";
import { render, screen } from "@testing-library/react";

describe('Front component', () => {
    it("Should render Front component", () => {
        render(<Front />);
        screen.debug();

        const frontPageInformation = screen.getByText("Najnowsze wydarzenia");
        expect(frontPageInformation).toBeInTheDocument();
    })
})