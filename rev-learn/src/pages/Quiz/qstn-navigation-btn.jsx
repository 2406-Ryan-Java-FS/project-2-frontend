
import React, { useContext } from 'react'

import "./quiz.css";
import { Button } from '@mui/material';
import { QuizContext } from '../../provider/QuizProvider';

const QuestionNavigationButton = ({quiz:quizData}) => {
  const questionButton = quizData.questions;
  const { updateQuizQuestionId, quizStartTimer } = useContext(QuizContext);

  const handleQuestionButton = (button) => { 
    // console.log("🏈 ~ handleQuestionButton ~ handleQuestionButton  button:", button.target.textContent);
    updateQuizQuestionId(button.target.textContent - 1 );
  }

  return (
    <div className='questions-nav-buttons'>
      <p className="question-btn-label" style={{margin:'15px'}}>Question Buttons</p>
      {
        questionButton.map((item, idxqb) => (
          <div key={idxqb} style={{margin:'5px'}}>
            <Button 
                variant="contained" 
                id='quiz-nav-btn'
                onClick={(e) => handleQuestionButton(e)}
                href="#contained-buttons" 
                size="small" 
                disabled={ quizStartTimer ? false : true }
              >
              {idxqb+1}
            </Button>
          </div>
        ))
      }
    </div>
  )
}

export default QuestionNavigationButton
