import { render } from "@testing-library/react";
import * as React from 'react';
import Error from "./Error";

describe('Error404',() => {
    it('will match snapshot', () => {
        var component = render(<Error/>);
        expect(component).toMatchSnapshot();
    })
})