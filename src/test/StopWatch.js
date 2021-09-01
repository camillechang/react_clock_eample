import React from "react";
class StopWatch extends React.Component {
  state = {
    counter: 0,
    isStartBtnDisabled: false,
  };

  startTimer = () => {
    console.log("start");

    this.setState({
      isStartBtnDisabled: true,
    });

    const cb = () => {
      console.log("setInterval cb");

      this.setState({
        counter: this.state.counter + 1,
      });
    };
    this.timer = setInterval(cb, 1000);
  };

  stopTimer = () => {
    console.log("stop");
    this.setState({
      isStartBtnDisabled: false,
      counter: 0,
    });

    clearInterval(this.timer);
  };

  render() {
    return (
      <>
        <div>{this.state.counter} </div>
        <button
          onClick={this.startTimer}
          disabled={this.state.isStartBtnDisabled}
        >
          start
        </button>
        <button onClick={this.stopTimer}>stop</button>
      </>
    );
  }
}

export default StopWatch;
