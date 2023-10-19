import { render } from "@testing-library/react";
import * as React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Card from "./Card";
import store from "../../app/store";

describe('Card', () => {
    it('Home should be match snapshot', () => {
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Card />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })
})