
import { useContext, useEffect, useState } from 'react';

import { Checkbox } from '@mui/material'
import { AppContext } from '../../provider/QuizProvider';

import { answerChoiceManager } from './answer-choice-manager';

import { 
  course_id, 
  user_id 
} from './quiz-data';

import "./quiz.css";
import "./mc-answer-line.css";

const QuizMultipleChoiceAnswers = ({question_id, quiz:quizData}) => {
  // const [ setCurrentChoiceId ] = useState(answerChoiceManager.getCurrentQtnAnswerChoice(item));
  // const [ selections, setSelections ] = useState(answerChoiceManager.getCurrentQtnAnswerChoice(item));
  // const { quizStartTimer, updateQuizTimer } = useContext(AppContext);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const answersList = quizData.questions[0].question_choices;
  const correct_choice = 1;
  const questionId = question_id;
  // const answersList = ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E'];

  // useEffect(() => {
  //   // Log the loaded selections when the component mounts (for debugging purposes)
  //   // console.log("🎢 ~ QuizMultipleChoiceAnswers ~ selections ~ answerChoiceManager:", selections, answerChoiceManager.getSelections());
  
  //   // updateQuizTimer("ON");

  // }, []);

  // const handleCheckboxUpdateChange = (event, choiceId) => {
  //   const curr_user_id = user_id;
  //   const curr_course_id = course_id;

  //   // Add or update the answerChoice in the manager
  //   answerChoiceManager.addOrUpdateAnswerChoice(curr_user_id, curr_course_id, questionId, choiceId);
  //   if (event.target.checked) {
  //     console.log("🚀 ~ handleCheckboxUpdateChange ~ select choice questionId:", questionId);
  //     answerChoiceManager.addOrUpdateAnswerChoice(user_id, course_id, questionId, choiceId, quizStartTimer);
  //   } else {
  //     console.log("🚀 ~ handleCheckboxUpdateChange ~ remove choice questionId:", questionId, quizStartTimer);
      
  //     answerChoiceManager.removeAnswerChoice(questionId);
  //   }

  //   setSelections(answerChoiceManager.getSelections());

  //   // setCurrentChoiceId(choiceId);
  //   // Log the updated selection (for debugging purposes)
  //   console.log("🎄 ~ QuizMultipleChoiceAnswers ~ answerChoiceManager:", answerChoiceManager.getSelections());
  // };


  useEffect(() => {
    // Load the initial selection from AnswerChoiceManager
    const initialSelection = answerChoiceManager.getCurrentQtnAnswerChoice(question_id);
    setSelectedChoice(initialSelection);
  }, [question_id]);

  const handleChoiceChange = (choiceId) => {
    if (selectedChoice === choiceId) {
      // Deselect if the same choice is selected again
      setSelectedChoice(null);
      answerChoiceManager.removeAnswerChoice(question_id);
    } else {
      // Select the new choice
      setSelectedChoice(choiceId);
      answerChoiceManager.addOrUpdateAnswerChoice(user_id, course_id, question_id, choiceId);
    }
  };

  console.log("🎄 ~ QuizMultipleChoiceAnswers ~ quizQuestionId ** quizData.questions[item].question_choices:", question_id, quizData.questions[0].question_choices[0]);

  return (
    <div>
      <ol className="numbered-list">
        {
          answersList.map((choice, idxal) => {
            const isChecked = answerChoiceManager.getCurrentQtnAnswerChoice(questionId) === idxal;
            console.log("✨ ~ QuizMultipleChoiceAnswers ~ idxal, questionId, answer:", idxal, questionId, choice);
            // console.log("✨ ~ QuizMultipleChoiceAnswers ~ quizStartTimer:", quizStartTimer);

            return (
              <li key={idxal} className='answer-container'>
                <span className="left-button">
                  <Checkbox 
                      checked={ isChecked } 
                      // disabled={ quizStartTimer ? false : true }
                      onChange={() => handleChoiceChange(choice.id)}
                    />
                </span>
                {/* <button className="right-button">Right</button> */}
                <span className="middle-button">{choice.text}</span>
                <span>
                  {
                    (correct_choice === "true")
                      ? <span className="right-button right-checkmark">✔</span>
                      : (correct_choice === "false") 
                        ? <span className="right-button right-circle-x">X</span> 
                        : <></>
                  }
                </span>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default QuizMultipleChoiceAnswers

// import VerifiedIcon from '@mui/icons-material/Verified';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
