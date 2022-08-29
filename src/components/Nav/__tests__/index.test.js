import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //baseline first
    it('renders', () => {
        render(<Nav />);
    })
    //snapshot second
    it('matches snapshot', () => {
        const {asFragment} = render(<Nav/>);
        //asset calue comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //arrange
        const {getByLabelText} = render(<Nav/>);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');

    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About Me');
    });
  })