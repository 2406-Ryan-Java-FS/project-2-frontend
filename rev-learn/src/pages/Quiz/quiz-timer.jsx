
import { Button } from '@mui/material';
import CountdownTimer from './countdown-timer';
import { useContext } from 'react';
import { AppContext } from '../../provider/AppProvider';

const QuizTimer = () => {

  // const [startTimer, setStartTimer] = useState(false)
  const { quizStartTimer, startQuizTimer } = useContext(AppContext);

  const handleStartTimer = () => {
    // setStartTimer(true);
    startQuizTimer();
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
          ? <CountdownTimer initialHours={'2'} initialMinutes={'0'} initialSeconds={'0'} />
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