import React from 'react';
import Register from "../Register";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Register component', () => {
    it("Should render value in input", () => {


        render(<div/>);
        screen.debug();

        /*
        render(<Form/>);
        screen.debug();
        const aElement = screen.getByDisplayValue("moderator");
        expect(aElement).toBeInTheDocument();
        fireEvent.click();
        */

        const button = screen.queryByRole('button');
        //expect(button).toBeInTheDocument();

    })
})