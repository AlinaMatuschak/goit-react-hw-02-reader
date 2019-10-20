import React, { Component } from 'react';
import T from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.module.css';
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
    publications: this.props,
    index: 0,
  };

  lengthOfArray = () => {
    const publications = this.state.publications;
    return publications.items.length;
  };

  handleIncrement = () => {
    if (this.state.index + this.step >= this.lengthOfArray()) {
      toast('Більше статей немає');
      return;
    } else {
      this.setState(prevState => ({
        index: prevState.index + this.step,
      }));
    }
  };

  handleDecrement = () => {
    if (this.state.index <= 0) {
      toast('Це сама перша стаття');
      return;
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index - this.step,
        };
      });
    }
  };

  render() {
    return (
      <div className="reader">
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          index={this.state.index}
        />

        <Counter
          index={this.state.index + this.step}
          length={this.lengthOfArray()}
        />

        <Publication
          publication={this.state.publications.items[this.state.index]}
          number={this.state.index + this.step}
        />
      </div>
    );
  }
}
