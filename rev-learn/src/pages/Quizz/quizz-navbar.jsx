import React from 'react'

import "./quizz.css";
import { Link } from '@mui/material';

const quizzNavigationItems = ['<< first', '<left' ];
const quizzNavigationItemsRight = ['right>', 'last >>'];

const QuizzNavigationBar = () => {
  return (
    <div className='quizz-navbar'>
      <div className='quizz-navbar-left'>
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
      <div>
        <h5>Search Functionality</h5>
      </div>
      <div className='quizz-navbar-right'>
        {
          quizzNavigationItemsRight.map((item, idx1) => (
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
    </div>
  )
}

export default QuizzNavigationBar
