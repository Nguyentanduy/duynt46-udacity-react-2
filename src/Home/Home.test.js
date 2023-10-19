import { render } from "@testing-library/react";
import * as React from 'react';
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../app/store";

describe('Home', () => {
    it('Home should be match snapshot', () => {
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Home />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })
})