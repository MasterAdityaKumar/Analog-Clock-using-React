import React, { useState, useEffect } from "react";
import "./style.css";


function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees = (time.getMinutes() / 60) * 360;
  const hoursDegrees = (time.getHours() / 12) * 360;

  return (
    <div className="analog-clock">
      <div className="analog-clock-face">
        <div className="analog-clock-hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }} />
        <div className="analog-clock-hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
        <div className="analog-clock-hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
      </div>
    </div>
  );
}

export default AnalogClock;
