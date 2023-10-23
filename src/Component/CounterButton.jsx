import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    if (this.state.count < 5) {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));

      // Update the title of the page
      document.title = `Count: ${this.state.count+ 1}`;
    }
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default CounterButton;
