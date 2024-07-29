
import { Checkbox } from '@mui/material'

// import VerifiedIcon from '@mui/icons-material/Verified';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { quizAnswers } from './quiz-data';

const QuizMultipleChoiceAnswers = ({item}) => {
  
  const answersList = quizAnswers[item].answers;
  // const answersList = ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E'];
  
  // console.log("🚀 ~ QuizMultipleChoiceAnswers ~ item:", item)
  // console.log("🚀 ~ QuizMultipleChoiceAnswers ~ quizAnswers[item].answers:", quizAnswers[item].answers[0].ans_text);
  // console.log("quizAnswers: ", quizAnswers[item].answers);

  return (
    <div>
      <ol>
        {
          answersList.map((ans, idxal) => (
            <li key={idxal}>
              <p className='answer-item'>
                <span><Checkbox/></span>
                {ans.ans_text}
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
