import React, { useContext } from 'react'

import { Button, Typography } from '@mui/material';
import { Toolbar } from '../../../node_modules/@mui/material/index';

import { QuizContext } from '../../provider/QuizProvider';

import "./quiz.css";

const quizNavigationItems = ['<< first', '<prev' ];
const quizNavigationItemsRight = ['next>', 'last >>'];

const QuizNavigationBar = ({quizData}) => {
  const { quizStartTimer, quizQuestionId, updateQuizQuestionId } = useContext(QuizContext);

  function moveQuestionsLeft(id) {
    id = Number(id);      // the arrow id clicked.

    if( id === 1 && quizQuestionId > 0) {
      updateQuizQuestionId(quizQuestionId - 1);
      console.log("🎆 ~ moveQuestionsLeft - 1 ~~ quizQuestionId:", quizQuestionId, id);
    } else if( id === 0 ) {
      updateQuizQuestionId(0);
      console.log("🎆 ~ moveQuestionsLeft (first) ~~ quizQuestionId:", quizQuestionId);
    }
  }

  function moveQuestionsRight(id) {
    id = Number(id);      // the arrow id clicked.

    if( id === 0 && quizQuestionId < quizData.questions.length - 1) {
      updateQuizQuestionId(quizQuestionId + 1);
      console.log("🎇 ~ moveQuestionsRight + 1 ~~ quizQuestionId:", quizQuestionId);
    } else if( id === 1 ) {
      updateQuizQuestionId(quizData.questions.length - 1);
      console.log("🎇 ~ moveQuestionsRight + (end) ~~ quizQuestionId:", quizQuestionId);
    }
  }

  return (
    
    <Toolbar
      sx={{
        flexGrow: 1, backgroundColor: '#F36928',
        borderRadius: '25px', border: 'solid black 1px',
        justifyContent: 'center'
      }}
      variant="outlined"
      position="static">

      <div className='quiz-navbar'>
        <div className='quiz-navbar-left'>
          {
            quizNavigationItems.map((item, idx1) => (
              <div key={idx1}>
                <Button 
                    variant="text"
                    sx={{color:'black'}}
                    id={idx1}
                    onClick={(e) => moveQuestionsLeft(e.target.id)}
                    disabled={ quizStartTimer ? false : true }
                  >
                  {item}
                </Button>
              </div>
            ))
          }
        </div>
        <div className='quiz-navbar-center'>
            <Typography sx={{ color: 'black', fontSize: '18px' }}>
              <span>Quiz Question No. {quizQuestionId + 1}</span>
            </Typography>
        </div>
        <div className='quiz-navbar-right'>
          {
            quizNavigationItemsRight.map((item, idx1) => (
              <div key={idx1}>
                <Button 
                    variant="text"
                    sx={{color:'black'}}
                    id={idx1}
                    onClick={(e) => moveQuestionsRight(e.target.id)}
                    disabled={ quizStartTimer ? false : true }
                  >
                  {item}
                </Button>
              </div>
            ))
          }
        </div>
      </div>
    </Toolbar>
  )
}

export default QuizNavigationBar
