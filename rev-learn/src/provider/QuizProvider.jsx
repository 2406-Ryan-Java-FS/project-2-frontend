import { createContext, useState } from 'react';

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  // Here is where you can setup and create 'state' or any data
  // you want your Components to have access to.
  const [quizQuestionId, setQuizQuestionId] = useState(0);
  const [quizStartTimer, setQuizStartTimer] = useState(false);
  const [quizScorePercent, setQuizScorePercent] = useState(0);
  const [timeAllowed, setTimeAllowed] = useState(0);
  // const [quizId, setQuizId] = useState(0);
  // const [quizAttempts, setQuizAttempts] = useState(0);

  function updateQuizQuestionId(id) {
      setQuizQuestionId(id);
  }

  function updateQuizTimer(start) {
    if( start === "ON" ) {
      setQuizStartTimer(true);
    } else if( start === "OFF" ) {
      setQuizStartTimer(false);
    }
  }

  function updateQuizScore(score) {
    setQuizScorePercent(score);
  }

  function updateTimeAllowed(time_allowed) {
    setTimeAllowed( time_allowed );
  }
// "loggedInUser"

  const data = {
    quizQuestionId: quizQuestionId,
    updateQuizQuestionId: updateQuizQuestionId,
    quizStartTimer: quizStartTimer,
    updateQuizTimer: updateQuizTimer,
    quizScorePerct: quizScorePercent,
    updateQuizAScore: updateQuizScore,
    timeAllowed: timeAllowed,
    updateTimeAllowed: updateTimeAllowed,
  }

  return (
      <QuizContext.Provider value={data} >
          {children}
      </QuizContext.Provider>
  );
}

/*

 */