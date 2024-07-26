import { Button, TextField } from '@mui/material'
import React from 'react'
import QuizzMultipleChoiceAnswers from './quizz-mc-answers'
import QuestionScratchPad from './qstn_scratch_pad'

import { quizzAnswers, quizzQuestions } from './quizz-data';

import "./quizz.css";
import QuizzAnswerEdit from './quizz-edit-answers';
// import { ClassSharp } from '@mui/icons-material';

const QuizItem = ({mode, item}) => {
console.log("🚀 ~ QuizItem ~ mode:", mode)

  console.log("question is:", quizzQuestions[item].qtn);
  console.log("answer 1 is", quizzAnswers[item]);

  const allowEdit = mode === 'student' ? true : false;

  return (
    <div className='quizz-item'>
      <TextField
          id="outlined-multiline-static"
          label="Question:"
          multiline
          rows={4}
          defaultValue={quizzQuestions[item].qtn}
          InputProps={{
            readOnly: {allowEdit},
          }}
        />
      <div >
        <div className='qi-middle-row'>
          <div className='question-mcq'>
            { mode === 'student' 
              ? <QuizzMultipleChoiceAnswers item={item}/>
              : <QuizzAnswerEdit />
            }
          </div>
        </div>
        {
          mode === 'student' 
          ? <div>
              <div>
              <QuestionScratchPad/>
              </div>
              <div className='quizz-buttons'>
              <Button id='quizz-btn' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Mark</Button>
              <Button id='quizz-btn' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Submit</Button>
              </div>
            </div>
          : <div>
              <p> do what the educator wants to do!</p>
            </div>
        }
      </div>
    </div>
  )
}

export default QuizItem
