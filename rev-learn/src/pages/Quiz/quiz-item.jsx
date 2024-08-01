
import React, { useContext, useEffect, useState } from 'react'

import { Button, TextField } from '@mui/material'

import { AppContext } from '../../provider/AppProvider';

import QuizMultipleChoiceAnswers from './quiz-mc-answers'
import QuestionScratchPad from './qstn_scratch_pad'
import QuizSubmit from './quiz-submit';
import QuizAnswerEdit from './quiz-edit-answers';
import { quizQuestions } from './quiz-data';

import { 
  getAllQuizAnswers, 
  getAllQuizQuestions, 
  getAllQuizzes, 
  getQuizDetails 
} from '../../controllers/studentQuizController';

// import { ClassSharp } from '@mui/icons-material';

import "./quiz.css";

const QuizItem = ({mode, item}) => {
  const { quizQuestionId } = useContext(AppContext);
  const [ questionText, setQuestionText ] = useState("");

  const itemId = Number(quizQuestionId);
  
  const allowEdit = mode === 'student' ? true : false;
  
  // console.log("🎲 ~ QuizItem ~ quizQuestionId:", quizQuestionId)
  // console.log("🚀 ~ QuizItem ~ itemId:", itemId)
  // console.log("🚀 ~ QuizItem ~ quizQuestions[itemId]:", quizQuestions[itemId].question)

  useEffect(() => {

    setQuestionText(quizQuestions[itemId].question);

  }, [ itemId, setQuestionText ]);


  const handleSubmitQuiz = async () => {

    try {
      QuizSubmit();
    } catch (error) {
      console.error('Error on processing submit:', error);
    }

  }


  return (
    <div className='quiz-item'>
      <div>
        <TextField
            id="outlined-multiline-static"
            label="Question:"
            multiline
            rows={4}
            defaultValue={questionText}
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
          <QuestionScratchPad/>
          <div className='quiz-buttons'>
            {/* <Button id='quiz-btn' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Mark</Button> */}
            <Button 
                id='quiz-page-button' 
                onClick={handleSubmitQuiz}
                variant="outlined" 
                style={{margin:'2px 5px 2px 2px'}}
              >
              Submit
            </Button>
            <Button id='quiz-page-button' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Cancel</Button>
            <Button 
                id='quiz-button'
                onClick={getQuizDetails}
                variant="outlined" 
                style={{margin:'2px 5px 2px 2px'}}
              >
              Quiz
            </Button>
            <Button 
                className='quiz-btn' 
                id='quiz-questions'
                variant="outlined" 
                onClick={getAllQuizQuestions}
                style={{margin:'2px 5px 2px 2px'}}
              >
              Questions
            </Button>
            <Button 
                id='quiz-description'
                variant="outlined" 
                onClick={getAllQuizAnswers}
                style={{margin:'2px 5px 2px 2px'}}
              >
              Answers
            </Button>
            <Button 
                id='quiz-description'
                variant="outlined" 
                onClick={getAllQuizzes}
                style={{margin:'2px 5px 2px 2px'}}
              >
              All Quizzes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizItem
