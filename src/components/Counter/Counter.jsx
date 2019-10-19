import React from 'react';
import './Counter.module.css';

const Counter = ({ index, length }) => (
  <p className="counter">
    {index}/{length}
  </p>
);

export default Counter;
