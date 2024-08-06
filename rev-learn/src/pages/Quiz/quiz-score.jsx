
const QuizScore = ({score}) => {
  // const [quizScorePerct] = useContext(AppContext);
  
  console.log("🥇 ~ QuizScore ~ score:", score)

  return (
    <div className='quiz-score'>
      <p>Your Score is: {score}%</p>
    </div>
  )
}

export default QuizScore;