import React from 'react';
import Facebook from "../facebookLogin";
import { render, screen } from "@testing-library/react";

describe('Facebook component', () => {
    it("Should render Facebook component", () => {
        render(<Facebook />);
        screen.debug();

        const buttonLogInWithFacebook = screen.getByText("Zaloguj się za pomocą Facebook");
        expect(buttonLogInWithFacebook).toBeInTheDocument();
    })
})