import React, { Component } from "react";
import "./Clock.css";
import { getCurrentDate } from "./util";

class Clock extends Component {
  constructor(props) {
    console.log("--constructor");
    super(props);

    const { city } = this.props;
    console.log("--city-----", city);
    const { currentTime, currentDate } = getCurrentDate(city);
    this.state = {
      currentTime: currentTime,
      currentDate: currentDate,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { city } = this.props;
      const { currentTime, currentDate } = getCurrentDate(city);

      this.setState({
        currentTime: currentTime,
        currentDate: currentDate,
      });
    }, 1000);
    console.log("--componentDidMount");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("--componentWillUnmount");
  }

  render() {
    console.log("--render");
    const { city } = this.props;
    const { currentTime, currentDate } = this.state;
    let item = currentTime.split(":");
    // console.log("item:", item[0]);

    return (
      <div className="flex-item">
        <div className="city">{city}</div>
        <div className="customied-clock">
          <div className="currentDate">{currentDate}</div>
          <div className="time-display">
            <label className="item">{item[0]}</label>
            <span>:</span>
            <label className="item">{item[1]}</label>
            <span>:</span>
            <label className="item">{item[2]}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
