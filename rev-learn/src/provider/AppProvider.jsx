import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  //Here is where you can setup and create 'state' or any data
  //you want your Components to have access to.
  const [quizQuestionId, setquizQuestionId] = useState(0);
  const [quizStartTimer, setQuizStartTimer] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(1);

  function updateQuizQuestionId(id) {
      setquizQuestionId(id);
  }

  function startQuizTimer() {
      setQuizStartTimer(true);
  }

  function updateCurrentCourse(id) {
      setCurrentCourse(id);
  }

  const data = {
      quizQuestionId: quizQuestionId,
      updateQuizQuestionId: updateQuizQuestionId,
      quizStartTimer: quizStartTimer,
      startQuizTimer: startQuizTimer,
      currentCourse: currentCourse,
      updateCurrentCourse: updateCurrentCourse
  }

  return (
      <AppContext.Provider value={data} >
          {children}
      </AppContext.Provider>
  );
}
