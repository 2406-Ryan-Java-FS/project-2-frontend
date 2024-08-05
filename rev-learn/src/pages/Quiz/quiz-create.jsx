import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { FormControlLabel } from '@mui/material';
import AnswerCreate from './qstn-answer-create';

export default function QuizCreate() {

  const [title, setTitle] = useState('')

  const [time, setTime] = useState('')

  const [attempts, setAttempts] = useState('')

  const [questionFields, setQuestionFields] = useState([
    { question_text: '', question_choices: [{text: '', correct: false}]}
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
    let newQuestion = { question_text: '', question_choices: [{text: '', correct: false}]}

    setQuestionFields([...questionFields, newQuestion])
  }

  const removeQuestion = (index) => {
    let data = [...questionFields];
    data.splice(index, 1)
    setQuestionFields(data)
  }

  const handleAnswerChange = (qIndex, aIndex, event) => {
    let data = [...questionFields];
    data[qIndex].question_choices[aIndex][event.target.name] = event.target.value;
    setQuestionFields(data);
  }

  const addAnswer = (qIndex) => {
    let data = [...questionFields];
    let newAnswer = { text: '', correct: false }

    data[qIndex].question_choices.push(newAnswer)
    setQuestionFields(data)
  }

  const removeAnswer = (qIndex, aIndex) => {
    let data = [...questionFields];
    data[qIndex].question_choices.splice(aIndex, 1)
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
                {questionFields.map((input, qIndex) => {
                    return (
                    <div key={qIndex}>
                        <h5>Question {qIndex+1}</h5>
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
                            name="question_text"
                            value={input.question_text}
                            onChange={event => handleQuestionChange(qIndex, event)}
                        /><br/>
                        <h5>Answers:</h5>
                        {input.question_choices.map((aInput, aIndex) => {
                            return (
                            <div key={aIndex}>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={2}
                                >
                                <h5>{aIndex+1}:</h5>
                                <TextField 
                                    id="outlined-multiline-static"
                                    label="Answer Text"
                                    multiline
                                    rows={2}
                                    required
                                    variant="outlined"
                                    color="primary"
                                    type="text"
                                    sx={{mb: 3}}
                                    name="text"
                                    value={aInput.text}
                                    onChange={event => handleAnswerChange(qIndex, aIndex, event)}
                                /><br/>
                                <FormControlLabel
                                label="Correct Answer?"
                                control={
                                <Checkbox
                                    value={aInput.correct}
                                    onChange={event => handleAnswerChange(qIndex, aIndex, event)}
                                />
                                }/><br/>
                                <Button variant="outlined" onClick={() => removeAnswer(qIndex, aIndex)}>Remove Answer</Button>
                                </Stack>
                            </div>
                        )
                        })}
                        <Button variant="outlined" onClick={addAnswer(qIndex)}>Add an Answer</Button><br/>
                        {/* <AnswerCreate/> */}
                        <Button variant="outlined" onClick={() => removeQuestion(qIndex)}>Remove Question</Button>
                    </div>
                    )
                })}
                <Button variant="outlined" onClick={addQuestion}>Add a Question</Button><br/>
              <Button variant="outlined" type="submit">Create Quiz</Button>
          </form>
        </div>
      );

}