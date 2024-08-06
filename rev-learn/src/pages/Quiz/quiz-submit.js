
import { answerChoiceManager } from "./answer-choice-manager";

const QuizSubmit = ({ quizData }) => {

  const quizAttempt = {
    quizAttempts_id : 1,
    student_id : 1,
    quiz_id : 9,
    attempt_date : Date.now(),
    score : 0,
  }

  // console.log("🧮 ~ QuizSubmit ~ quizQuestions:", quizQuestions );
  // console.log("🧮 ~ QuizSubmit ~ selections.length:", selections.length );
  
  // Check answers
  const results = answerChoiceManager.checkAnswers(quizData.questions);
  console.log("🧮 ~ QuizSubmit ~ results : ", results);

  quizAttempt.score = calculateScore(results);
  console.log("🧮 ~ QuizSubmit ~ quizAttempt.score : ", quizAttempt.score)

  return quizAttempt.score;
}
  
function calculateScore(results) {
  if (!results.length) return 0;

  const correctAnswersCount = results.filter(result => result.isCorrect).length;
  const totalQuestions = results.length;
  const scorePercentage = (correctAnswersCount / totalQuestions) * 100;

  return scorePercentage.toFixed(2); // returns the percentage as a string with 2 decimal places
}

export default QuizSubmit
