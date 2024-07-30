import { TextField } from '@mui/material'
import React from 'react'

import "./quiz.css";

const QuestionScratchPad = () => {
  return (
    <div className='qtn-scratch-pad'>
      <TextField
          id="outlined-multiline-static"
          label="Scratch Pad"
          multiline
          rows={4}
          defaultValue="Make any notes here..."
        />
    </div>
  )
}

export default QuestionScratchPad;
