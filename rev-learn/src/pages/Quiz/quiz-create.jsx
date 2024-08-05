import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import AnswerCreate from './qstn-answer-create';

export default function QuizCreate() {

  const [title, setTitle] = useState('')

  const [time, setTime] = useState('')

  const [attempts, setAttempts] = useState('')

  const [questionFields, setQuestionFields] = useState([
    { questionText: '' }
  ])
  

  const createQuiz = async (event) => {
    event.preventDefault();

    const data = {
      course_id: 1,
      title: title,
      timer: time,
      attempts_allowed: attempts,
      open: true,
      questions: questionFields
    }

    console.log(data);
    const url = "http://localhost:8080/quizzes";

    const options = {
      method: "POST",
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  
    try {
      const httpResponse = await fetch(url, options);
      const body = await httpResponse.json();

      console.log(body);
      if (body) {
          alert("Quiz has been created!");
      }
    } catch (error) {
      alert("There was an error creating the quiz.");
    }
  }

  const handleQuestionChange = (index, event) => {
    let data = [...questionFields];
    data[index][event.target.name] = event.target.value;
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
                            name="questionText"
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