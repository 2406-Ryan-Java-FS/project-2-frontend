import React, { useContext } from 'react'

import { Button } from '@mui/material';

import { quizQuestions } from './quiz-data';
import { AppContext } from '../../provider/AppProvider';

import "./quiz.css";

const quizNavigationItems = ['<< first', '<left' ];
const quizNavigationItemsRight = ['right>', 'last >>'];

const QuizNavigationBar = () => {
  const { quizQuestionId, updateQuizQuestionId } = useContext(AppContext);

  function moveQuestionsLeft(id) {
    id = Number(id);      // the arrow id clicked.

    if( id === 1 && quizQuestionId > 0) {
      updateQuizQuestionId(quizQuestionId - 1);
      console.log("🎆 ~ moveQuestionsLeft - 1 ~~ quizQuestionId:", quizQuestionId, id);
    } else if( id === 0 ) {
      updateQuizQuestionId(0);
      console.log("🎆 ~ moveQuestionsLeft (first) ~~ quizQuestionId:", quizQuestionId);
    }
    console.log("final quizQuestionId:", quizQuestionId);
  }

  function moveQuestionsRight(id) {
    id = Number(id);      // the arrow id clicked.

    if( id === 0 && quizQuestionId < quizQuestions.length - 1) {
      updateQuizQuestionId(quizQuestionId + 1);
      console.log("🎇 ~ moveQuestionsRight + 1 ~~ quizQuestionId:", quizQuestionId);
    } else if( id === 1 ) {
      updateQuizQuestionId(quizQuestions.length - 1);
      console.log("🎇 ~ moveQuestionsRight + (end) ~~ quizQuestionId:", quizQuestionId);
    }
    console.log("final quizQuestionId:", quizQuestionId);
  }

  return (
    <div className='quiz-navbar'>
      <div className='quiz-navbar-left'>
        {
          quizNavigationItems.map((item, idx1) => (
            <div key={idx1}>
              <Button 
                  variant="text"
                  id={idx1}
                  onClick={(e) => moveQuestionsLeft(e.target.id)}
                >
                {item}
              </Button>
            </div>
          ))
        }
      </div>
      <div className='quiz-navbar-center'>
        <p >Question No. {quizQuestionId + 1}</p>
      </div>
      <div className='quiz-navbar-right'>
        {
          quizNavigationItemsRight.map((item, idx1) => (
            <div key={idx1}>
              <Button 
                  variant="text"
                  id={idx1}
                  onClick={(e) => moveQuestionsRight(e.target.id)}
                >
                {item}
              </Button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default QuizNavigationBar
