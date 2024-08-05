
import React, { useState, useEffect, useRef, useContext } from 'react';

import { Button } from '@mui/material';

import { QuizContext } from '../../provider/QuizProvider';

const QuizTimer = ({timer}) => {
  const { quizStartTimer, updateQuizTimer, timeAllowed } = useContext(QuizContext);
  const [time, setTime] = useState({
    hours: Math.floor(timer / 60),
    minutes: timer % 60,
    seconds: 0,
  });
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(intervalRef.current);
          updateQuizTimer("OFF");
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
    }, 1000);
  };

  useEffect(() => {
    if (quizStartTimer === true) {
      startTimer();
    }

    return () => clearInterval(intervalRef.current);

  }, [ quizStartTimer, timeAllowed ]);


  useEffect(() => {
    const { hours, minutes, seconds } = time;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      handleTimerOut();
    }
  }, [ time ]);

  const handleStartTimer = () => {
    // console.log("⌚ ~ handleStartTimer ~ quizStartTimer:", quizStartTimer)
    updateQuizTimer("ON");
  };

  const handleTimerOut = () => {
    alert('Timer has reached zero!');
    updateQuizTimer("OFF");
  };

  return (
    <div className='quiz-start'>
      <Button 
        id='quiz-page-button' 
        variant="outlined" 
        onClick={handleStartTimer}
        style={{margin: '2px 5px 2px 2px'}}
        disabled={quizStartTimer === true} // Disable button while timer is running
      >
        Start Quiz
      </Button>
      <div className='countdown-timer'>
        <h3>Countdown Timer</h3>
        <div style={{ fontSize: 'x-large', fontWeight: 'bolder' }}>
          {String(time.hours).padStart(2, '0')}:
          {String(time.minutes).padStart(2, '0')}:
          {String(time.seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default QuizTimer;
