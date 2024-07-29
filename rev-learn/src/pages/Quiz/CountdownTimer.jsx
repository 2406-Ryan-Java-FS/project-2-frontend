import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialHours, initialMinutes, initialSeconds }) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });
console.log("initialHours, initialMinutes, initialSeconds", initialHours, initialMinutes, initialSeconds);
  useEffect(() => {
    // Update the timer every second
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0) {
            seconds = 59;
            minutes -= 1;
          } else {
            if (hours > 0) {
              seconds = 59;
              minutes = 59;
              hours -= 1;
            } else {
              // Timer has finished
              clearInterval(intervalId);
              return prevTime;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h4 style={{color:"magenta"}}>Countdown Timer</h4>
      <div style={{fontWeight:"bolder", color:"magenta"}}>
        {String(time.hours).padStart(2, '0')}:
        {String(time.minutes).padStart(2, '0')}:
        {String(time.seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default CountdownTimer;
