
import { Checkbox } from '@mui/material'

// import VerifiedIcon from '@mui/icons-material/Verified';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { quizzAnswers } from './quizz-data';

// const answersList = ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E'];

const QuizzMultipleChoiceAnswers = ({item}) => {
  const answersList = quizzAnswers[item].answers;
  
  return (
    <div>
      <ol>
        {
          answersList.map((ans, idxal) => (
            <li key={idxal}>
              <p className='answer-item'>
                <span><Checkbox/></span>
                {ans}
                <span>{idxal === 1 ? <HighlightOffIcon/> : <>{idxal === 3 ? <CheckCircleOutlineIcon/> : <></>}</>}</span>
              </p>
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default QuizzMultipleChoiceAnswers
