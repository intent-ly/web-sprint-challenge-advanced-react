import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { render, fireEvent, screen } from "@testing-library/react";

// Write up the two tests here and make sure they are testing what the title shows

test("Render Header", () => {

    const { getByText } = render(<CheckoutForm />);
    const Header = getByText("Checkout Form");
    expect(Header).toBeInTheDocument;
    
});

test("Form Test Input and Successful Message", () => {

    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name:/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)


    fireEvent.change(firstNameInput, { target: { value: 'Hanna' } })
    fireEvent.change(lastNameInput, { target: { value: 'Clobes' } })
    fireEvent.change(addressInput, { target: { value: 'Stockdale 1500' } })
    fireEvent.change(cityInput, { target: { value: 'Los Angeles' } })
    fireEvent.change(stateInput, { target: { value: 'CA' } })
    fireEvent.change(zipInput, { target: { value: '93352' } })


    const submitButton = screen.getByTestId(/button/i)
    fireEvent.click(submitButton)

    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument;


});