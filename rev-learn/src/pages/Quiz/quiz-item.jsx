
import React, { useContext, useEffect, useState } from 'react'

import { Button, TextField } from '@mui/material'

import { QuizContext } from '../../provider/QuizProvider';

import QuizMultipleChoiceAnswers from './quiz-mc-answers'
import QuizSubmit from './quiz-submit';
import QuizAnswerEdit from './quiz-edit-answers';
import QuizScore from './quiz-score';

import "./quiz.css";
import MultipleChoiceQuestion from './multiple-choice-question';
import { answerChoiceManager } from './answer-choice-manager';
import { getQuizAttemptByQuizAndStudent, getQuizAttemptByStudentId, submitQuizAttempt } from '../../controllers/studentQuizController';

const QuizItem = ({ mode, quiz: quizData}) => {

  const { quizQuestionId, updateQuizTimer } = useContext(QuizContext);
  const [ questionText, setQuestionText ] = useState("");
  const [ score, setScore ] = useState("0.00");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const allowEdit = mode === 'student' ? true : false;
    
  useEffect(() => {

    setQuestionText(quizData.questions[quizQuestionId].question_text);

  }, [ quizData.questions, quizQuestionId ]);

  // console.log("🎲 ~ QuizItem ~ quizData:", quizData)

  const handleSubmitQuiz = async () => {
    try {
      updateQuizTimer("OFF");
      setScore( QuizSubmit({quizData}) );
    } catch (error) {
      console.error('Error on processing submit:', error);
    }
  }

  const handleCancelQuiz = async () => {
    try {
      // Clear local storage or selections when a new quiz starts
      setScore("0.00");
      answerChoiceManager.clearSelections(); // Implement this method to clear local storage
      updateQuizTimer("OFF");
    } catch (error) {
      console.error('Error on processing submit:', error);
    } 
  }

  const handleSubmitQuizAttempt = async () => {
    try {
      setLoading(true); // Set loading to true to indicate the process has started

      const quizAttempt = {
        "quizAttempts_id": 3,
        "student_id": 1,
        "quiz_id": 1,
        "attempt_date": Date.now(),
      };

      // const attemptsResponse = await getQuizAttemptByStudentId(1);
      // const submitResponse = await submitQuizAttempt(quizAttempt);
      // console.log("⚾ ~ handleSubmitQuizAttempt ~ quizAttempt ++ attempts:", submitResponse);

      setMessage('Quiz attempt not implemented yet. Coming on next version!');

    } catch (error) {
      console.error('Error on processing submit:', error);
      setMessage('An error occurred while submitting the quiz attempt.');
    } finally {
      setLoading(false); // Set loading to false once the process is complete
    }
  };

  return (
    <div className='quiz-item'>
      <div>
        <TextField
            id="outlined-multiline-static"
            label="Question:"
            multiline
            rows={3}
            defaultValue={questionText}
            InputProps={{
              readOnly: allowEdit,
            }}
            focused
          />
        <div className='qi-middle-row'>
          <div className='question-mcq'>
            { mode === 'student' 
              ? <MultipleChoiceQuestion
                  user_id={1}
                  course_id={quizData.course_id}
                  question_id={quizQuestionId} // Assuming question ID is the index in the questions array
                  question_text={quizData.questions[quizQuestionId].question_text}
                  question_choices={quizData.questions[quizQuestionId].question_choices}
                />
              : <QuizAnswerEdit />
            }
          </div>
        </div>
        <div>
          {/* <QuestionScratchPad/> */}
          <div className='quiz-buttons'>
            {/* <Button id='quiz-btn' variant="outlined" style={{margin:'2px 5px 2px 2px'}}>Mark</Button> */}
            <Button 
                id='quiz-page-button' 
                onClick={handleSubmitQuiz}
                variant="outlined" 
                style={{margin:'2px 5px 2px 2px'}}
              >
              Submit
            </Button>
            <Button 
                id='quiz-page-button' 
                variant="outlined" 
                onClick={handleCancelQuiz}
                style={{margin:'2px 5px 2px 2px'}}
              >
              Cancel
            </Button>
            {/* {loading ? (
              <div>Loading...</div>
            ) : (
              <Button 
                  id='quiz-button'
                  onClick={handleSubmitQuizAttempt}
                  variant="outlined" 
                  style={{margin:'2px 5px 2px 2px'}}
                >
                Submit Quiz Attempt
              </Button>
            )}                 */}
          </div>
        </div>
        <QuizScore score={score}/>
      </div>
    </div>
  )
}

export default QuizItem
