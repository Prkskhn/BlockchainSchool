import { Component } from "react";

class ClassComp extends Component {
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
        {this.state.count}
        <button onClick={() => this.setCount(this.state.count + 1)}>+</button>
      </div>
    );
  }
}

export default ClassComp;
