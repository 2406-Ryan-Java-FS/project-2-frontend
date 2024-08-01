import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import AnswerCreate from './qstn-answer-create';

export default function QuizCreate() {

  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState(false)

  const [time, setTime] = useState('')
  const [timeError, setTimeError] = useState(false)

  const [attempts, setAttempts] = useState('')
  const [attemptsError, setAttemptsError] = useState(false)

  const [questionFields, setQuestionFields] = useState([
    { questionText: '' }
  ])
  

  const createQuiz = (event) => {
      event.preventDefault()
 
        setTitleError(false)
        setTimeError(false)
        setAttemptsError(false)
  }

  const handleQuestionChange = (index, event) => {
    let data = [...questionFields];
    data[index][event.target.questionText] = event.target.value;
    setQuestionFields(data);
  }

  const addQuestion = () => {
    let newQuestion = { questionText: '' }

    setQuestionFields([...questionFields, newQuestion])
  }

  const removeQuestion = (index) => {
    let data = [...questionFields];
    data.splice(index, 1)
    setQuestionFields(data)
  }

      return (
        <div>
          <h3>New Quiz</h3>
          <form autoComplete="off" onSubmit={createQuiz}>
                <TextField 
                    label="Quiz Title"
                    onChange={e => setTitle(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="text"
                    sx={{mb: 3}}
                    value={title}
                    error={titleError}
                 /><br/>
                 <TextField 
                    label="Time Limit"
                    onChange={e => setTime(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="number"
                    sx={{mb: 3}}
                    value={time}
                    error={timeError}
                 /><br/>
                 <TextField 
                    label="# of Attempts"
                    onChange={e => setAttempts(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="number"
                    sx={{mb: 3}}
                    value={attempts}
                    error={attemptsError}
                 /><br/>
                <h4>Questions:</h4>
                {questionFields.map((input, index) => {
                    return (
                    <div key={index}>
                        <h5>Question {index+1}</h5>
                        <TextField 
                            id="outlined-multiline-static"
                            label="Question Text"
                            multiline
                            rows={4}
                            required
                            variant="outlined"
                            color="primary"
                            type="text"
                            sx={{mb: 3}}
                            value={input.questionText}
                            onChange={event => handleQuestionChange(index, event)}
                        /><br/>
                        <h5>Answers:</h5>
                        <AnswerCreate/>
                        <Button variant="outlined" onClick={() => removeQuestion(index)}>Remove Question</Button>
                    </div>
                    )
                })}
                <Button variant="outlined" onClick={addQuestion}>Add a Question</Button><br/>
              <Button variant="outlined" type="submit">Create Quiz</Button>
          </form>
        </div>
      );

}