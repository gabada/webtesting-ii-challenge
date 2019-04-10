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
    });
    describe('Strike Button', () => {
      it('check if strike button renders', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/strike/i)).not.toBeNull();
      });
      it('strike count increases on button fire', () => {
        const { getByText } = render(<Dashboard />);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        getByText(/strikes: 1/i);
      });
      it('strike and ball count reset to 0 after 3 strikes', () => {
        const { getByText } = render(<Dashboard />);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        fireEvent.click(strikeButton);
        fireEvent.click(strikeButton);
        getByText(/strikes: 0/i);
        getByText(/balls: 0/i);
      });
      it('strike count maxs at 3 on button fire', () => {
        const { getByText } = render(<Dashboard />);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        fireEvent.click(strikeButton);
        fireEvent.click(strikeButton);
        getByText(/strikes: 0/i);
      });
    });
    describe('Foul Button', () => {
      it('check if foul button renders', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/foul/i)).not.toBeNull();
      });
      it('increase strikes by 1 when strikes are below 3', () => {
        const { getByText } = render(<Dashboard />);
        const foulButton = getByText(/foul/i);
        fireEvent.click(foulButton);
        fireEvent.click(foulButton);
        getByText(/strikes: 2/i);
      });
      it('with 2 strikes foul has no effect on fouls', () => {
        const { getByText } = render(<Dashboard />);
        const foulButton = getByText(/foul/i);
        fireEvent.click(foulButton);
        fireEvent.click(foulButton);
        fireEvent.click(foulButton);
        getByText(/strikes: 2/i);
      });
    });
    describe('Ball Button', () => {
      it('check if ball button renders', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/ball/i)).not.toBeNull();
      });
      it('ball count increases on button fire', () => {
        const { getByText } = render(<Dashboard />);
        const ballButton = getByText(/ball/i);
        fireEvent.click(ballButton);
        getByText(/balls: 1/i);
      });
      it('strike and ball count reset to 0 after 4 balls', () => {
        const { getByText } = render(<Dashboard />);
        const ballsButton = getByText(/ball/i);
        fireEvent.click(ballsButton);
        fireEvent.click(ballsButton);
        fireEvent.click(ballsButton);
        fireEvent.click(ballsButton);
        getByText(/strikes: 0/i);
        getByText(/balls: 0/i);
      });
      it('ball count maxs at 4 on button fire', () => {
        const { getByText } = render(<Dashboard />);
        const ballButton = getByText(/ball/i);
        fireEvent.click(ballButton);
        fireEvent.click(ballButton);
        fireEvent.click(ballButton);
        fireEvent.click(ballButton);
        getByText(/balls: 0/i);
      });
    });
  });
});
