import React, { useState } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  Stack,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import "../../styles/quiz/quiz-create.css";

export default function QuizCreate() {
  const { courseId } = useParams();

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [attempts, setAttempts] = useState('');
  const [questionFields, setQuestionFields] = useState([
    { question_text: '', question_choices: [{ text: '', correct: false }] }
  ]);

  const createQuiz = async (event) => {
    event.preventDefault();

    const data = {
      course_id: courseId,
      title: title,
      timer: time,
      attempts_allowed: attempts,
      open: true,
      questions: questionFields
    };

    console.log(data);

    const url1 = `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/courses/${courseId}`;
    const url2 = "http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/quizzes";

    const options1 = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const options2 = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const httpResponse1 = await fetch(url1, options1);
      const body1 = await httpResponse1.json();

      console.log(body1);
      if (body1) {
        const httpResponse2 = await fetch(url2, options2);
        const body2 = await httpResponse2.json();

        console.log(body2);
        if (body2) {
          alert("Quiz has been created!");
        }
      }
    } catch (error) {
      alert("There is no course with that ID.");
    }
  };

  const handleQuestionChange = (index, event) => {
    let data = [...questionFields];
    data[index][event.target.name] = event.target.value;
    setQuestionFields(data);
  };

  const addQuestion = () => {
    let newQuestion = { question_text: '', question_choices: [{ text: '', correct: false }] };
    setQuestionFields([...questionFields, newQuestion]);
  };

  const removeQuestion = (index) => {
    let data = [...questionFields];
    data.splice(index, 1);
    setQuestionFields(data);
  };

  const handleAnswerChange = (qIndex, aIndex, event) => {
    let data = [...questionFields];
    const { name, type, checked, value } = event.target;
    if (type === 'checkbox') {
      data[qIndex].question_choices[aIndex][name] = checked;
    } else {
      data[qIndex].question_choices[aIndex][name] = value;
    }
    setQuestionFields(data);
  };

  const addAnswer = (qIndex) => {
    let data = [...questionFields];
    let newAnswer = { text: '', correct: false };
    data[qIndex].question_choices.push(newAnswer);
    setQuestionFields(data);
  };

  const removeAnswer = (qIndex, aIndex) => {
    let data = [...questionFields];
    data[qIndex].question_choices.splice(aIndex, 1);
    setQuestionFields(data);
  };

  return (
    <div className="quiz-create-container">
      <div className="quiz-create-inner-container">
        <Typography variant="h4" gutterBottom>
          Create New Quiz
        </Typography>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <form autoComplete="off" onSubmit={createQuiz}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Quiz Title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  variant="outlined"
                  fullWidth
                  value={title}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Time Limit (minutes)"
                  onChange={(e) => setTime(e.target.value)}
                  required
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={time}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="# of Attempts"
                  onChange={(e) => setAttempts(e.target.value)}
                  required
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={attempts}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Questions:</Typography>
                {questionFields.map((input, qIndex) => (
                  <Paper key={qIndex} elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h6">Question {qIndex + 1}</Typography>
                    <TextField
                      label="Question Text"
                      multiline
                      rows={4}
                      required
                      variant="outlined"
                      fullWidth
                      name="question_text"
                      value={input.question_text}
                      onChange={(event) => handleQuestionChange(qIndex, event)}
                      sx={{ marginBottom: 2 }}
                    />
                    <Typography variant="h6">Answers:</Typography>
                    {input.question_choices.map((aInput, aIndex) => (
                      <Grid container spacing={2} alignItems="center" key={aIndex}>
                        <Grid item xs={7}>
                          <TextField
                            label={`Answer ${aIndex + 1} Text`}
                            multiline
                            rows={2}
                            required
                            variant="outlined"
                            fullWidth
                            name="text"
                            value={aInput.text}
                            onChange={(event) => handleAnswerChange(qIndex, aIndex, event)}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <FormControlLabel
                            label="Correct?"
                            control={
                              <Checkbox
                                name="correct"
                                checked={aInput.correct}
                                onChange={(event) => handleAnswerChange(qIndex, aIndex, event)}
                              />
                            }
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => removeAnswer(qIndex, aIndex)}
                          >
                            Remove
                          </Button>
                        </Grid>
                      </Grid>
                    ))}
                    <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
                      <Button variant="outlined" onClick={() => addAnswer(qIndex)}>
                        Add Answer
                      </Button>
                      <Button variant="outlined" color="error" onClick={() => removeQuestion(qIndex)}>
                        Remove Question
                      </Button>
                    </Stack>
                  </Paper>
                ))}
                <Button variant="outlined" onClick={addQuestion} sx={{ marginTop: 2 }}>
                  Add Question
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: 3 }}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Create Quiz
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
}
