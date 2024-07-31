
import { useContext } from 'react';

import { AppContext } from '../../provider/AppProvider';

import QuestionNavigationButton from './qstn-navigation-btn';
import QuizNavigationBar from './quiz-navbar'
import QuizTimer from './quiz-timer';
import QuizItem from './quiz-item';

import "./quiz.css";

const QuizPage = () => {

  const { quizQuestionId } = useContext(AppContext);

  localStorage.clear();

  return (
    <div className='quiz-container'>
      <div className='question-section'>
        <h1 className='title'>Quiz Page</h1>
        <QuizNavigationBar/>
        <div className='question-item'>
          <QuizItem mode='student' item={quizQuestionId}/>
          <div>
            <QuizTimer />
            <div className='qtn-navigation-btn'>
              <QuestionNavigationButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage
