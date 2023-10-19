import { fireEvent, render } from "@testing-library/react";
import * as React from 'react';
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import store from "../app/store";
import { Provider } from "react-redux";

describe('Login', () => {
    it('will show alert if input field has been filled', () => {
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        let userInput = component.getByTestId('user')
        fireEvent.change(userInput, { target: { value: 'sarahedo' } })
        let passwordInput = component.getByTestId('password')
        fireEvent.change(passwordInput, { target: { value: 'password123' } })
        let button = component.getByTestId('submit')
        fireEvent.click(button)
        expect(component.getByTestId('login-success')).toBeInTheDocument();
    })
})