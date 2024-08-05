
import QuestionNavigationButton from './qstn-navigation-btn';
import QuizNavigationBar from './quiz-navbar'
import QuizTimer from './quiz-timer';
import QuizItem from './quiz-item';

import "./quiz.css";
import { useEffect, useState } from 'react';
import { getSingleIdQuiz } from '../../controllers/studentQuizController';
import { answerChoiceManager } from './answer-choice-manager';

const QuizPage = ({ courseId = 1, quizId = 6 }) => {
  const [ loading, setLoading ] = useState(true);
  const [ quizData, setQuizData ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    // Initialize the local storage if not already initialized
    answerChoiceManager.initializeStorage();

    const fetchSingleQuiz = async () => {
      try {
        const quiz = await getSingleIdQuiz({quizId:6});

        setQuizData(quiz);

        // Clear local storage or selections when a new quiz starts
        answerChoiceManager.clearSelections(); // Implement this method to clear local storage

      } catch (error) {
        console.error("Fetch error: following getSingleIdQuiz", error);
        setError(error);
        return;
      } finally {
        setLoading(false);
      }
    }

    fetchSingleQuiz();

  }, []);

  if( loading ) {
    answerChoiceManager.clearSelections();

    return <div>Loading</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='quiz-container'>
      <div className='question-section'>
        <h1 className='container-title'>Quiz Page</h1>
        <div>
          <QuizNavigationBar quizData={quizData}/>
          <div className='question-item' style={{backgroundColor: '#F36928'}}>
            <QuizItem mode='student' quiz={quizData}/>
            <div>
              <QuizTimer timer = {quizData.timer}/>
              <div className='qtn-navigation-btn'>
                <QuestionNavigationButton quiz={quizData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage
