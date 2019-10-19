import React from 'react';
import './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <section className="controls">
    <button type="button" className="button" onClick={onDecrement}>
      Назад
    </button>
    <button type="button" className="button" onClick={onIncrement}>
      Вперед
    </button>
  </section>
);

export default Controls;
