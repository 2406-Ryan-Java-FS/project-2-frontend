import { useContext } from 'react'

import "./quiz.css";
import { Button } from '@mui/material';
import { quizQuestions } from './quiz-data';
import { AppContext } from '../../provider/AppProvider';

const quizNavigationItems = ['<< first', '<left' ];
const quizNavigationItemsRight = ['right>', 'last >>'];

const QuizNavigationBar = () => {
  const { quizQuestionId, updateQuizQuestionId } = useContext(AppContext);

  function moveQuestionsLeft(id) {
    console.log("🎆 ~ moveQuestionsLeft -- id:", id)
    id = Number(id);
    if( id === 1 && quizQuestionId > 0) {
      updateQuizQuestionId(quizQuestionId - 1);
      console.log("🎆 ~ moveQuestionsLeft - 1 ~~ quizQuestionId:", quizQuestionId, id)
    } else {
      updateQuizQuestionId(0);
      console.log("🎆 ~ moveQuestionsLeft (first) ~~ quizQuestionId:", quizQuestionId)
    }
  }

  // console.log("quizQuestionId", quizQuestionId);
  
  function moveQuestionsRight(id) {
    console.log("🎇 ~ moveQuestionsRight ++ id:", id)
    id = Number(id);
    if( id === 0 && quizQuestionId < quizQuestions.length) {
      updateQuizQuestionId(quizQuestionId + 1);
      console.log("🎇 ~ moveQuestionsRight + 1 ~~ quizQuestionId:", quizQuestionId)
    } else {
      updateQuizQuestionId(quizQuestions.length-1);
      console.log("🎇 ~ moveQuestionsRight + (end) ~~ quizQuestionId:", quizQuestionId)
    }
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
      <div>
        <h5>Search Functionality</h5>
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
