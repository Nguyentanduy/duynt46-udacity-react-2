import { render } from "@testing-library/react";
import * as React from 'react';
import { MemoryRouter } from "react-router-dom";
import store from "../app/store";
import { Provider } from "react-redux";
import New from "./New";

describe('New',() => {
    it('New page should be match snapshot', () => {
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <New />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })
})