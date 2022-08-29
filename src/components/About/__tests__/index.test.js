import React from "react";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe('About component', () => {
    //render first test
    it('renders', () => {
        render(<About />);
    })
    //render 2nd test
    it('matches snapshot DOM node structure', () => {
        //render about
        const {asFragment} = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
})