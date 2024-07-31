import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialHours, initialMinutes, initialSeconds, onComplete }) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    // Function to handle the countdown
    const tick = () => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return prevTime;
        }

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -= 1;
        }

        return { hours, minutes, seconds };
      });
    };

    // Set up the interval to call tick every second
    const intervalId = setInterval(tick, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Effect to check for timer completion
  useEffect(() => {
    const { hours, minutes, seconds } = time;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      if (onComplete) {
        onComplete();
      }
    }
  }, [time, onComplete]);

  return (
    <>
      <h3 style={{color:"crimson"}}>Countdown Timer</h3>
      <div style={{fontSize:"x-large", fontWeight:"bolder", color:"crimson"}}>
        {String(time.hours).padStart(2, '0')}:
        {String(time.minutes).padStart(2, '0')}:
        {String(time.seconds).padStart(2, '0')}
      </div>
    </>
  );
};

export default CountdownTimer;
