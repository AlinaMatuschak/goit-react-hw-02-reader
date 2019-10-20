import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <section className="controls">
    <button type="button" className="button" onClick={onDecrement}>
      Назад
    </button>
    <ToastContainer />
    <button type="button" className="button" onClick={onIncrement}>
      Вперед
    </button>
    <ToastContainer />
  </section>
);

export default Controls;
