
import { useState } from 'react';
import QuestionNavigationButton from './qstn-navigation-btn';
import QuizItem from './quizz-item';
import QuizzNavigationBar from './quizz-navbar'

import "./quizz.css";

const QuizzPage = () => {

  const [currentQuestion, setCurrentQuestion] = useState(1);

  return (
    <div className='quizz-container'>
      <div className='question-section'>
        <h3>Quizz Page</h3>
        <QuizzNavigationBar/>
        <div className='question-item'>
          <QuizItem mode='educator' item={currentQuestion}/>
          <div className='qtn-navigation-btn'>
            <QuestionNavigationButton/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizzPage
