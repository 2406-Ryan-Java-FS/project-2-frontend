
import { useContext } from 'react';
import QuestionNavigationButton from './qstn-navigation-btn';
import QuizItem from './quiz-item';
import QuizNavigationBar from './quiz-navbar'

import "./quiz.css";
import { AppContext } from '../../provider/AppProvider';
import TimerStart from './timer-start';

const QuizPage = () => {

  const { quizQuestionId, updateQuizQuestionId } = useContext(AppContext);

  return (
    <div className='quiz-container'>
      <div className='question-section'>
        <h3>Quiz Page</h3>
        <QuizNavigationBar/>
        <div className='question-item'>
          <QuizItem mode='student' item={quizQuestionId}/>
          <div>
            <TimerStart />
            <div className='qtn-navigation-btn'>
              <QuestionNavigationButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizPage
