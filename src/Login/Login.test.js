import { render } from "@testing-library/react";
import * as React from 'react';
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import store from "../app/store";
import { Provider } from "react-redux";

describe('Login',() => {
    it('Login should be match snapshot', () => {
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })
})