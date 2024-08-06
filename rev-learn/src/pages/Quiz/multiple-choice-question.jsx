import React, { useState, useEffect, useContext } from 'react';
import { answerChoiceManager } from './answer-choice-manager';
import { Checkbox } from '@mui/material';
import { QuizContext } from '../../provider/QuizProvider';

const MultipleChoiceQuestion = ({ user_id, course_id, question_id, question_text, question_choices }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const { quizStartTimer } = useContext(QuizContext);

  useEffect(() => {
    // Load the initial selection from AnswerChoiceManager
    const initialSelection = answerChoiceManager.getCurrentQtnAnswerChoice(question_id);
    console.log(`Initial selection for question ${question_id}:`, initialSelection);
    setSelectedChoice(initialSelection);
  }, [question_id, question_choices]);

  const handleChoiceChange = (choiceIndex) => {
    if (selectedChoice === choiceIndex) {
      // Deselect if the same choice is selected again
      setSelectedChoice(null);
      answerChoiceManager.removeAnswerChoice(question_id);
    } else {
      // Select the new choice
      setSelectedChoice(choiceIndex);
      answerChoiceManager.addOrUpdateAnswerChoice(user_id, course_id, question_id, choiceIndex);
    }
  };

  return (
    <div>
      {question_choices.map((choice, index) => (
        <div key={index} className='answer-container'>
          <span className="left-button">
            <Checkbox 
                checked={selectedChoice === index}
                disabled={ quizStartTimer ? false : true }
                onChange={() => handleChoiceChange(index)}
              />
          </span>
          {/* <button className="right-button">Right</button> */}
          <span className='choice-text'>{choice.text}</span>
          <span>
            {
              // (correct_choice === "true")
              //   ? <span className="right-button right-checkmark">✔</span>
              //   : (correct_choice === "false") 
              //     ? <span className="right-button right-circle-x">X</span> 
              //     : <></>
              <></>
            }
          </span>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;
