import React from 'react';
import DetalisProducts from "../DetalisProduct";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';

describe('DetalisProducts component', () => {
    it("Should render DetalisProducts component", () => {
        render(
            <Router>
                <DetalisProducts />
            </Router>
        );

        screen.debug();
    })
})