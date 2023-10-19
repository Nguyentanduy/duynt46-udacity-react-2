import { render } from "@testing-library/react";
import * as React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store";
import NavBar from "./NavBar";

describe('NavBar', () => {
    it('NavBar should be match snapshot', () => {
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <NavBar />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })
})