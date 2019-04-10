import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
  it('component renders', () => {
    render(<Display />);
  });
  describe('balls', () => {
    it('balls are displayed', () => {
      const { getByText } = render(<Display />);
      getByText(/balls/i);
    });
    it('count is correct', () => {
      const { queryByText } = render(<Display balls={2} />);
      expect(queryByText(/balls: 2/i)).not.toBeNull();
    });
    it('props are passed', () => {
      const { queryByText } = render(<Display balls={1} />);
      expect(queryByText(/balls: 1/i)).not.toBeNull();
    });
  });
  describe('strikes', () => {
    it('strikes are displayed', () => {
      const { getByText } = render(<Display />);
      getByText(/strikes/i);
    });
    it('count is correct', () => {
      const { queryByText } = render(<Display strikes={2} />);
      expect(queryByText(/strikes: 2/i)).not.toBeNull();
    });
    it('props are passed', () => {
      const { queryByText } = render(<Display strikes={1} />);
      expect(queryByText(/strikes: 1/i)).not.toBeNull();
    });
  });
});
