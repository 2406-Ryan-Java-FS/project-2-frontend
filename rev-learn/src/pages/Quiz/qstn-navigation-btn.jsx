import React from 'react'

import "./quiz.css";
import { quizQuestions } from './quiz-data';
import { Button } from '@mui/material';

const QuestionNavigationButton = () => {
  const questionButton = quizQuestions;
  
  // console.log("🚀 ~ QuestionNavigationButton ~ questionButton:", questionButton)
  
  return (
    <div className='questions-nav-buttons'>
      <p style={{margin:'15px', color: 'black'}}>Question Nav Buttons</p>
      {
        questionButton.map((item, idxqb) => (
          <div key={idxqb} style={{margin:'5px'}}>
            <Button variant="contained" 
                href="#contained-buttons" 
                size="small" 
                // id='quiz-nav-btn'
                >
              {item.question_seq}
            </Button>
          </div>
        ))
      }
    </div>
  )
}

export default QuestionNavigationButton
