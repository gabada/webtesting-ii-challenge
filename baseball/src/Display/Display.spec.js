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
    // it.todo('count increments'); MOVE TO DASHBOARD
    // it.todo('count resets when hit'); MOVE TO DASHBOARD
    // it.todo('count resets when 4 balls are recorded'); MOVE TO DASHBOARD
    // it.todo('count maxs out at 4'); MOVE TO DASHBOARD
    // it.todo('foul counter is not touched'); MOVE TO DASHBOARD
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
    // it.todo('count increments'); MOVE TO DASHBOARD
    // it.todo('count resets when hit'); MOVE TO DASHBOARD
    // it.todo('count resets when 3 strikes are recorded'); MOVE TO DASHBOARD
    // it.todo('count maxs out at 3'); MOVE TO DASHBOARD
    // it.todo('increase fouls by 1 when strikes are below 3'); MOVE TO DASHBOARD
    // it.todo('with 2 strikes foul has no effect on fouls'); MOVE TO DASHBOARD
  });
});
