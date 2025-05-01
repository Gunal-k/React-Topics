import "./Digital_clock.css";
import React, { useState, useEffect } from "react";

const Digital_clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);

  }, []);
  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    return `${padZero(formattedHours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }
  function padZero(num) {
    return (num < 10 ? `0` : "") + num;
  }
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default Digital_clock;
