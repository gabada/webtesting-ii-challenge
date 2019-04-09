import React from 'react';

function Display(props) {
  return (
    <>
      <h1>hello world</h1>
      <p>Balls: {props.balls}</p>
      <p>Strikes: {props.strikes}</p>
    </>
  );
}

export default Display;
