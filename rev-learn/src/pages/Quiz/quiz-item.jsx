import { Button, TextField } from '@mui/material'
import { useContext, useEffect } from 'react'
import QuizMultipleChoiceAnswers from './quiz-mc-answers'
import QuestionScratchPad from './qstn_scratch_pad'

import { quizAnswers, quizQuestions } from './quiz-data';

import "./quiz.css";
import QuizAnswerEdit from './quiz-edit-answers';
import { AppContext } from '../../provider/AppProvider';
// import { ClassSharp } from '@mui/icons-material';

const QuizItem = ({mode, item}) => {
  const { quizQuestionId, updateQuizQuestionId } = useContext(AppContext);
  
  const itemId = Number(quizQuestionId);
  
  useEffect(() => {
    updateQuizQuestionId( quizQuestionId ); 
  }, [quizQuestionId, updateQuizQuestionId]);
  
  const allowEdit = mode === 'student' ? true : false;
  
  console.log("🚀 ~ QuizItem ~ quizQuestionId:", quizQuestionId)
  console.log("🚀 ~ QuizItem ~ itemId:", itemId)

  return (
    <div className='quiz-item'>
      <div>
        <TextField
            id="outlined-multiline-static"
            label="Question:"
            multiline
            rows={4}
            defaultValue={quizQuestions[itemId]}
            InputProps={{
              readOnly: allowEdit,
            }}
          />
        <div className='qi-middle-row'>
          <div className='question-mcq'>
            { mode === 'student' 
              ? <QuizMultipleChoiceAnswers item={itemId}/>
              : <QuizAnswerEdit />
            }
          </div>
        </div>
        <div>
          <div>
            <QuestionScratchPad/>
          </div>
          <div className='quiz-buttons'>
            <Button id='quiz-btn' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Mark</Button>
            <Button id='quiz-btn' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizItem
