import { Component } from "react";

class ClassComp2 extends Component {
  state = {
    count: 0,
  };

  setCount(num) {
    this.setState({
      count: num,
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.setCount(this.state.count + 1)}>+</button>
      </div>
    );
  }
}

export default ClassComp2;
