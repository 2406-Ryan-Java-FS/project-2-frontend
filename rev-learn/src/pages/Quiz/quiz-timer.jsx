
import { Button } from '@mui/material';
import CountdownTimer from './countdown-timer';

const QuizTimer = () => {

  return (
    <div className='quiz-start'>
      <Button id='quiz-btn' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Start Quiz</Button>
      <div>
        <CountdownTimer initialHours={'2'} initialMinutes={'0'} initialSeconds={'0'} />
      </div>
    </div>
  )
}

export default QuizTimer;