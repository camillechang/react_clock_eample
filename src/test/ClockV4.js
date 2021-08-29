import React, { Component } from "react";

class ClockV4 extends Component {

    constructor(props) {
        console.log("--constructor");
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ 
                currentTime: new Date().toLocaleTimeString()
             })
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
        const { currentTime } = this.state;
        return <h1>{city} -{currentTime}</h1>;
    }

};

export default ClockV4;