import React from 'react';
import T from 'prop-types';
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

Controls.propTypes = {
  onPublication: T.func.isRequired,
  index: T.number.isRequired,
  length: T.number.isRequired,
  step: T.number.isRequired,
};

export default Controls;
