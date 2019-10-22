import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { controls, button } from './Controls.module.css';

const Controls = ({ onPublication, index, length, step }) => (
  <section className={controls}>
    <button
      type="button"
      className={button}
      onClick={onPublication}
      disabled={index <= 0 && true}
    >
      Назад
    </button>
    <button
      type="button"
      className={button}
      onClick={onPublication}
      disabled={index + step >= length && true}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
