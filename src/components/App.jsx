import React, { Component } from 'react';
import T from 'prop-types';
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

  state = {
    publications: this.props,
    index: 0,
    step: 1,
  };

  lengthOfArray = () => {
    const publications = this.state.publications;
    return publications.items.length;
  };

  handleIncrement = () => {
    if (this.state.index + this.state.step < this.lengthOfArray()) {
      this.setState(prevState => ({
        index: prevState.index + this.state.step,
      }));
    } else return;
  };

  handleDecrement = () => {
    if (this.state.index > 0) {
      this.setState(prevState => {
        return {
          index: prevState.index - this.state.step,
        };
      });
    } else return;
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
          index={this.state.index + this.state.step}
          length={this.lengthOfArray()}
        />

        <Publication
          publication={this.state.publications.items[this.state.index]}
          number={this.state.index + this.state.step}
        />
      </div>
    );
  }
}
