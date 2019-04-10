import React, { Component } from 'react';

import Display from '../Display/Display';

class Dashboard extends Component {
  state = {
    balls: 0,
    fouls: 0,
    hits: 0,
    strikes: 0
  };
  render() {
    return (
      <>
        <button onClick={this.ball}>Ball</button>
        <button onClick={this.foul}>Foul</button>
        <button onClick={this.hit}>Hit</button>
        <button onClick={this.strike}>Strike</button>
        <Display strikes={this.state.strikes} balls={this.state.balls} />
      </>
    );
  }

  ball = () => {
    this.setState({ balls: 'Hello Web XVII' });
  };

  foul = () => {
    this.setState({ greeting: 'Bye Web XVII' });
  };

  hit = () => {
    this.setState({
      ...this.state.strikes,
      strikes: 0,
      ...this.state.balls,
      balls: 0
    });
  };

  strike = () => {
    this.setState({ greeting: 'Bye Web XVII' });
  };
}

export default Dashboard;
