import React, { useState, useEffect, Component } from "react";
import "./Clock2.css";
import { getCurrentDateviaTimezone } from "./util";
//given timezone get current date
class Clock2 extends Component {
  constructor(props) {
    super(props);
    const { currentTime, currentDate } = getCurrentDateviaTimezone(props);
    this.state = {
      currentTime: currentTime,
      currentDate: currentDate,
    };
  }

  // const [currentDate, setCurrentDate] = useState();

  componentDidMount() {
    this.timer = setInterval(() => {
      const { currentTime, currentDate } = getCurrentDateviaTimezone(
        this.props
      );

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
  // if (!currentDate) return <h1>Loading...</h1>;
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
export default Clock2;
