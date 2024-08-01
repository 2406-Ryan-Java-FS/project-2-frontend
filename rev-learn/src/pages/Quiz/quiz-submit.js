"use client"

import { answerChoiceManager } from "./answer-choice-manager";
import { quizQuestions } from "./quiz-data";
import ResponsiveDialog from "./quiz-result-dlg";

const QuizSubmit = () => {
  const selections = answerChoiceManager.getSelections();
  const qq = quizQuestions;
  let correct_choice = 0;

  for( let i = 0; i < selections.length; i++ ) {
    console.log("selections.answer_choice : ", selections[i].answer_choice);
    console.log("Questions.correct_choice : ", qq[i].correct_choice - 1);

    if( selections[i].answer_choice === qq[i].correct_choice - 1 ) {
      correct_choice = correct_choice + 1;
    }
  }

  console.log("correct_choice  : ", correct_choice );

  // ResponsiveDialog(correct_choice);

}

export default QuizSubmit
