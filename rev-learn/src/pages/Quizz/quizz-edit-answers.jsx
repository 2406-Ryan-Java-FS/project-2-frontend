import React, { useState } from 'react'

const QuizzAnswerEdit = () => {
  const [newQuizzAnswers, setNewQuizzAnswer] = useState([]);

  return (
    <div>
      <ol>
        <li><p>Question 1:   <input type="text"></input></p></li>
        <li><p>Question 2:   <input type="text"></input></p></li>
        <li><p>Question 3:   <input type="text"></input></p></li>
        <li><p>Question 4:   <input type="text"></input></p></li>
        <li><p>Question 5:   <input type="text"></input></p></li>
      </ol>
    </div>
  )
}

export default QuizzAnswerEdit