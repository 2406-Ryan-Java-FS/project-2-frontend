
import { Button } from '@mui/material';
import CountdownTimer from './CountdownTimer';

const TimerStart = () => {

  return (
    <div className='quiz-start'>
      <Button id='quiz-start-btn' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Start Quiz</Button>
      <div>
        <CountdownTimer initialHours={'2'} initialMinutes={'0'} initialSeconds={'0'} />
      </div>
    </div>
  )
}

export default TimerStart;