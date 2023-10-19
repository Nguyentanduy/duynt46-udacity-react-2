import { render } from "@testing-library/react";
import * as React from 'react';
import { MemoryRouter } from "react-router-dom";
import store from "../app/store";
import { Provider } from "react-redux";
import LeaderBoard from "./LeaderBoard";

describe('LeaderBoard',() => {
    it('LeaderBoard should be match snapshot', () => {
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <LeaderBoard />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })
})