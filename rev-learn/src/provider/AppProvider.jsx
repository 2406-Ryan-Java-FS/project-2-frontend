import { createContext, useState } from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';
import { globalStateSetter } from '../App';

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

    /*
    Adding global state to navigate and close the left side navgiation panel
    I need to be able to navigate and close the panel when any button is clicked on
    Currently fighting React which is the tool to make websites more easily.

    Error:
    infinite re-renders.

    Error:
    useNavigate() may be used only in the context of a <Router> component.

    Error:
    globalContext.navBarGoto is not a function
    */
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigateTrigger=useNavigate()

    /**
     * Navigates to the given browserReactUri
     * Closes the navbar and re-renders React components
     */
    function navBarGoto(browserReactUri){
        navigateTrigger(browserReactUri)
        setIsDrawerOpen(false)
        globalStateSetter()//<-causes re-render because of x+1
    }

    function updateCurrentCourse(id) {
        setCurrentCourse(id);
    }

    return (
      <AppContext.Provider value={
        //Pass all the variables and functions to everything else
        {
            quizQuestionId: quizQuestionId,
            updateQuizQuestionId: updateQuizQuestionId,
            quizStartTimer: quizStartTimer,
            startQuizTimer: startQuizTimer,

            currentCourse: currentCourse,
            updateCurrentCourse: updateCurrentCourse,

            isDrawerOpen:isDrawerOpen,
            navBarGoto:navBarGoto,
            setIsDrawerOpen:setIsDrawerOpen,
            //in child components
            //const globalContext=useContext(AppContext)
            //globalContext.setIsDrawerOpen()
        }

      } >
        {children}
      </AppContext.Provider>
    );
}
