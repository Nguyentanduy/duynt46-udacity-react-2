import { render } from "@testing-library/react";
import * as React from 'react';
import { MemoryRouter } from "react-router-dom";
import store from "../app/store";
import { Provider } from "react-redux";
import QuestionDetail from "./QuestionDetail";

describe('QuestionDetail',() => {
    it('QuestionDetail should be match snapshot', () => {
        var component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <QuestionDetail />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })
})