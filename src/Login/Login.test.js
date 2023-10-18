import { render } from "@testing-library/react";
import * as React from 'react';
import Login from "./Login";

describe('Login',() => {
    it('will match snapshot', () => {
        var component = render(<Login/>);
        expect(component).toMatchSnapshot();
    })
})