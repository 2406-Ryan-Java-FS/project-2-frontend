import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { FormControlLabel } from '@mui/material';
import {useState} from 'react';

export default function AnswerCreate() {

    const [answerFields, setAnswerFields] = useState([
        { answerText: '', correct: false }
    ])

    const handleAnswerChange = (index, event) => {
        let data = [...answerFields];
        data[index][event.target.name] = event.target.value;
        setAnswerFields(data);
    }

    const addAnswer = () => {
        let newAnswer = { answerText: '', correct: false }
    
        setAnswerFields([...answerFields, newAnswer])
    }

    const removeAnswer = (index) => {
        let data = [...answerFields];
        data.splice(index, 1)
        setAnswerFields(data)
    }

    return (
        <div>
            {answerFields.map((input, index) => {
                return (
                <div key={index}>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                    <h5>{index+1}:</h5>
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
                        value={input.answerText}
                        onChange={event => handleAnswerChange(index, event)}
                    /><br/>
                    <FormControlLabel
                    label="Correct Answer?"
                    control={
                    <Checkbox
                        value={input.correct}
                        onChange={event => handleAnswerChange(index, event)}
                    />
                    }/><br/>
                    <Button variant="outlined" onClick={() => removeAnswer(index)}>Remove Answer</Button>
                    </Stack>
                </div>
            )
            })}
            <Button variant="outlined" onClick={addAnswer}>Add an Answer</Button><br/>
        </div>
    );
}