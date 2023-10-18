import { render } from "@testing-library/react";
import * as React from 'react';
import Home from "./Home";

describe('Home',() => {
    it('will match snapshot', () => {
        var component = render(<Home/>);
        expect(component).toMatchSnapshot();
    })
})