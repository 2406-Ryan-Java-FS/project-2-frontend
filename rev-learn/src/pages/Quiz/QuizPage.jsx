
import { useContext } from 'react';
import QuestionNavigationButton from './qstn-navigation-btn';
import QuizItem from './quiz-item';
import QuizNavigationBar from './quiz-navbar'

import "./quiz.css";
import { AppContext } from '../../provider/AppProvider';
import QuizTimer from './quiz-timer';

const QuizPage = () => {

  const { quizQuestionId, updateQuizQuestionId } = useContext(AppContext);

  localStorage.clear();

  return (
    <div className='quiz-container'>
      <div className='question-section'>
        <h2>Quiz Page</h2>
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
