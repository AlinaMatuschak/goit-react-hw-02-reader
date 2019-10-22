import React, { Component } from 'react';
import T from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { reader } from './App.module.css';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

export default class App extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  step = 1;

  state = {
    publicationIndex: 0,
  };

  handlePublication = e => {
    const outerText = e.target.outerText;
    this.setState(prevState => ({
      publicationIndex:
        outerText === 'Вперед'
          ? prevState.publicationIndex + this.step
          : prevState.publicationIndex - this.step,
    }));
  };

  render() {
    return (
      <div className={reader}>
        <Controls
          onPublication={this.handlePublication}
          onDecrement={this.handleIncrement}
          index={this.state.publicationIndex}
          length={this.props.items.length}
          step={this.step}
        />

        <Counter
          index={this.state.publicationIndex + this.step}
          length={this.props.items.length}
        />

        <Publication
          publication={this.props.items[this.state.publicationIndex]}
          number={this.state.publicationIndex + this.step}
        />
      </div>
    );
  }
}
