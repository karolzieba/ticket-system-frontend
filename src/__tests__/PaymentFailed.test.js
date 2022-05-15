import React from 'react';
import TraditionalPaymentSuccess from "../PaymentFailed";
import { render, screen } from "@testing-library/react";

describe('PaymentFailed component', () => {
    it("Should render PaymentFailed component", () => {
        render(<TraditionalPaymentSuccess />);
        screen.debug();

        const informationAboutPaymentFailed = screen.getByText("Wystąpił błąd podczas kupowania biletu.");
        expect(informationAboutPaymentFailed).toBeInTheDocument();
    })
})