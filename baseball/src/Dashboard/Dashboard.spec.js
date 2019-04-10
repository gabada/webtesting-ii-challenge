import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
  it('renders successfully', () => {
    render(<Dashboard />);
  });
  describe('Buttons', () => {
    describe('Hit Button', () => {
      it('check if hit button renders', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/hit/i)).not.toBeNull();
      });
      it('hit count resets strikes and balls on button fire', () => {
        const { getByText } = render(<Dashboard />);
        const hitButton = getByText(/hit/i);
        fireEvent.click(hitButton);
        getByText(/balls: 0/i);
        getByText(/strikes: 0/i);
      });

      // it.todo('count resets when hit'); MOVE TO DASHBOARD
      // it.todo('count resets when 4 balls are recorded'); MOVE TO DASHBOARD
      // it.todo('count maxs out at 4'); MOVE TO DASHBOARD
      // it.todo('foul counter is not touched'); MOVE TO DASHBOARD
      // it.todo('count increments'); MOVE TO DASHBOARD
      // it.todo('count resets when hit'); MOVE TO DASHBOARD
      // it.todo('count resets when 3 strikes are recorded'); MOVE TO DASHBOARD
      // it.todo('count maxs out at 3'); MOVE TO DASHBOARD
      // it.todo('increase fouls by 1 when strikes are below 3'); MOVE TO DASHBOARD
      // it.todo('with 2 strikes foul has no effect on fouls'); MOVE TO DASHBOARD
    });
    describe('Strike Button', () => {
      it('check if strike button renders', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/strike/i)).not.toBeNull();
      });
    });
    describe('Foul Button', () => {
      it('check if foul button renders', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/foul/i)).not.toBeNull();
      });
    });
    describe('Ball Button', () => {
      it('check if ball button renders', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/ball/i)).not.toBeNull();
      });
    });
  });
});
