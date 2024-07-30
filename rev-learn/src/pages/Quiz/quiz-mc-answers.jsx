
import { useEffect, useState } from 'react';

import { Checkbox } from '@mui/material'

import { answerChoiceManager } from './answer-choice-manager';

import { 
  course_id, 
  quizAnswers, 
  user_id 
} from './quiz-data';

import "./quiz.css";
import "./mc-answer-line.css";

const QuizMultipleChoiceAnswers = ({item}) => {
  const [selection, setSelection ] = useState(answerChoiceManager.getCurrentQtnAnswerChoice(item));

  const answersList1 = quizAnswers[item].answers;
  const correct_choice = 1;
  // const answersList = ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E'];
  const questionId = item;

  useEffect(() => {
    // Log the loaded selections when the component mounts (for debugging purposes)
    console.log("🎢 ~ QuizMultipleChoiceAnswers ~ answerChoiceManager:", answerChoiceManager.getSelections());
  }, []);

  const handleCheckboxUpdateChange = (event, choiceId) => {
    const curr_user_id = user_id;
    const curr_course_id = course_id;
    
    // Add or update the answerChoice in the manager
    answerChoiceManager.addOrUpdateAnswerChoice(curr_user_id, curr_course_id, questionId, choiceId);

    setSelection(choiceId);
    // Log the updated selection (for debugging purposes)
    console.log("🎄 ~ QuizMultipleChoiceAnswers ~ answerChoiceManager:", answerChoiceManager.getSelections());
  };

  // console.log("🚀 ~ QuizMultipleChoiceAnswers ~ questionId:", item)
  // console.log("🚀 ~ QuizMultipleChoiceAnswers ~ quizAnswers[item].answers", quizAnswers[item].answers);
  // console.log("quizAnswers: ", quizAnswers[item].answers);

  return (
    <div>
      <ol className="numbered-list">
        {
          answersList1.map((answer, idxal) => {
            const isChecked = answerChoiceManager.getCurrentQtnAnswerChoice(questionId) === idxal;
            console.log("✨ ~ QuizMultipleChoiceAnswers ~ idxal, questionId, answer:", idxal, questionId, answer);

            return (
              <li key={idxal} className='answer-container'>
                <span className="left-button">
                  <Checkbox 
                      checked={isChecked } 
                      onClick={(event) => handleCheckboxUpdateChange(event, idxal)}
                    />
                </span>
                {/* <button className="right-button">Right</button> */}
                <span className="middle-button">{answer.ans_text}</span>
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
        };
      </ol>
    </div>
  )
}

export default QuizMultipleChoiceAnswers

// import VerifiedIcon from '@mui/icons-material/Verified';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
