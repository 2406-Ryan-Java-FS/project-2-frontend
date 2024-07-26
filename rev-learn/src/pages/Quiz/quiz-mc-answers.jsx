
import { Checkbox } from '@mui/material'

// import VerifiedIcon from '@mui/icons-material/Verified';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { quizAnswers } from './quiz-data';

// const tmpAnswersList = ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E'];

const QuizMultipleChoiceAnswers = ({item}) => {
  
  console.log("🚀 ~ QuizMultipleChoiceAnswers ~ item:", item)
  // console.log("quizAnswers: ", quizAnswers[item].answers);
  // const answersList = quizAnswers[item].answers;
  const tmpAnswersList = ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E'];
  
  return (
    <div>
      <ol>
        {
          tmpAnswersList.map((ans, idxal) => (
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

export default QuizMultipleChoiceAnswers
