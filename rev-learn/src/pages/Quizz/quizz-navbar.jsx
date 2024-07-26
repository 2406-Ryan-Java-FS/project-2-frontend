import React from 'react'

import "./quizz.css";
import { Link } from '@mui/material';

const quizzNavigationItems = ['<< first', '<left', 'right>', 'last >>'];

const QuizzNavigationBar = () => {
  return (
    <div className='quizz-navbar'>
      {
        quizzNavigationItems.map((item, idx1) => (
          <div key={idx1}>
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                console.info("I'm a button.");
              }}
              >
              {item}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default QuizzNavigationBar
