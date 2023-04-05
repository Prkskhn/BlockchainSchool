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
      <div className="bg-blue-100 w-1/2 min-h-screen flex flex-col justify-center items-center text-2xl ">
        <div>{this.state.count}</div>
        <button
          className="bg-purple-300 px-4 py-2 rounded-md m-2 flex justify-center items-center"
          onClick={() => this.setCount(this.state.count + 1)}
        >
          +
        </button>
      </div>
    );
  }
}

export default ClassComp;
