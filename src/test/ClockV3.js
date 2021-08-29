import { useState, useEffect } from "react";

const ClockV3 = () => {

    const [currentTime, setCurrentTime] = useState();

    const cb = () => {
        console.log('react hooks useEffect callback');
        setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString(), 1000);
        })
    }
    useEffect(cb, []);

    useEffect(() => {
        console.log(currentTime);

    }, currentTime);
    return <h1>{currentTime}</h1>

}
export default ClockV3;