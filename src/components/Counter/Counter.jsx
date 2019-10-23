import React from 'react';
import T from 'prop-types';
import { counter } from './Counter.module.css';

const Counter = ({ index, length }) => (
  <p className={counter}>
    {index}/{length}
  </p>
);

Counter.propTypes = {
  index: T.number.isRequired,
  length: T.number.isRequired,
};

export default Counter;
