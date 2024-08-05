import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialHours, initialMinutes, initialSeconds, onComplete }) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Function to handle the countdown
    const tick = () => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -= 1;
        } else {
          // Timer has finished
          if (!isComplete) {
            setIsComplete(true);
            if (onComplete) {
              onComplete();
            }
          }
          return prevTime;
        }

        return { hours, minutes, seconds };
      });
    };

    // Set up the interval to call tick every second
    const intervalId = setInterval(tick, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [onComplete, isComplete]);

  return (
    <>
      <h3 style={{ color: 'crimson' }}>Countdown Timer</h3>
      <div style={{ fontSize: 'x-large', fontWeight: 'bolder', color: 'crimson' }}>
        {String(time.hours).padStart(2, '0')}:
        {String(time.minutes).padStart(2, '0')}:
        {String(time.seconds).padStart(2, '0')}
      </div>
    </>
  );
};

export default CountdownTimer;
