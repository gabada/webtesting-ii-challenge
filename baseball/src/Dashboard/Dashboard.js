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
    if (this.state.balls >= 3) {
      this.setState({ ...this.state.balls, balls: 0 });
    } else {
      this.setState({ ...this.state.balls, balls: this.state.balls + 1 });
    }
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ ...this.state.strikes, strikes: this.state.strikes + 1 });
    } else {
      this.setState({ ...this.state.strikes, strikes: this.state.strikes });
    }
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
    if (this.state.strikes >= 2) {
      this.setState({
        ...this.state.strikes,
        strikes: 0,
        ...this.state.balls,
        balls: 0
      });
    } else {
      this.setState({
        ...this.state.strikes,
        strikes: this.state.strikes + 1
      });
    }
  };
}

export default Dashboard;
