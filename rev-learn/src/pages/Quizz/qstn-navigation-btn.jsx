import React from 'react'

import "./quizz.css";
import { quizzQuestions } from './quizz-data';
import { Button, Link } from '@mui/material';

const QuestionNavigationButton = () => {
  const questionButton = quizzQuestions;
  
  console.log("🚀 ~ QuestionNavigationButton ~ questionButton:", questionButton)
  
  return (
    <div className='questions-nav-buttons'>
      <p style={{margin:'15px'}}>Question Nav Buttons</p>
      {
        questionButton.map((item, idxqb) => (
          <div key={idxqb} style={{margin:'5px'}}>
            <Button variant="contained" href="#contained-buttons" size="small">
              {item.seq}
            </Button>
          </div>
        ))
      }
    </div>
  )
}

export default QuestionNavigationButton
