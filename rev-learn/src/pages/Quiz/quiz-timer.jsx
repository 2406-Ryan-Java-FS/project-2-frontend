
import { Button } from '@mui/material';
import CountdownTimer from './countdown-timer';
import { useContext } from 'react';
import { AppContext } from '../../provider/AppProvider';

const QuizTimer = () => {

  // const [startTimer, setStartTimer] = useState(false)
  const { quizStartTimer, quizTimerButton } = useContext(AppContext);

  const handleStartTimer = () => {
    // setStartTimer(true);
    quizTimerButton("ON");

  }

  const handleTimerOut = () => {
    alert('Timer has reached zero!');
  }

  return (
    <div className='quiz-start'>
      <Button 
          id='quiz-btn' 
          variant="outlined" 
          onClick={handleStartTimer}
          style={{margin:'2px 5px 2px 2px'}}
        >
        Start Quiz
      </Button>
      <div>
        {
          (quizStartTimer === true ) 
          ? <CountdownTimer 
                initialHours={'0'} 
                initialMinutes={'1'} 
                initialSeconds={'30'} 
                onComplete={handleTimerOut} />
          : <>
              <h3 style={{color:"crimson"}}>Countdown Timer</h3>
              <div style={{fontSize:"x-large", fontWeight:"bolder", color:"crimson"}}>
                {String('00').padStart(2, '0')}:
                {String('00').padStart(2, '0')}:
                {String('00').padStart(2, '0')}
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default QuizTimer;
