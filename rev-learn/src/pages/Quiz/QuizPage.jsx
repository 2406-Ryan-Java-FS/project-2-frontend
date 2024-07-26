
import { useContext, useState } from 'react';
import QuestionNavigationButton from './qstn-navigation-btn';
import QuizItem from './quiz-item';
import QuizNavigationBar from './quiz-navbar'

import "./quiz.css";
import { AppContext } from '../../provider/AppProvider';

const QuizPage = () => {

  const [quizQuestion, setQuizQuestion] = useState(0);

  return (
    <div className='quiz-container'>
      <div className='question-section'>
        <h3>Quiz Page</h3>
        <QuizNavigationBar/>
        <div className='question-item'>
          <QuizItem mode='student' item={quizQuestion}/>
          <div className='qtn-navigation-btn'>
            <QuestionNavigationButton/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizPage
