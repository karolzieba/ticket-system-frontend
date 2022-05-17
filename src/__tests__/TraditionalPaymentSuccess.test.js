import React from 'react';
import TraditionalPaymentSuccess from "../TraditionalPaymentSuccess";
import { render, screen } from "@testing-library/react";

describe('TraditionalPaymentSuccess component', () => {
    it("Should render TraditionalPaymentSuccess component", () => {
        render(<TraditionalPaymentSuccess />);
        screen.debug();

        const informationAboutPaymentSuccess = screen.getByText("Zakup przebiegł pomyślnie.");
        expect(informationAboutPaymentSuccess).toBeInTheDocument();
    })
})