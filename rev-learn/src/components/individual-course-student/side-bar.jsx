import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">CourseHome</Link></li>
          <li><Link to="/grades">CourseGrades</Link></li>
          <li><Link to="/discussions">CourseDiscussions</Link></li>
          <li><Link to="/quizzes">CourseQuizzes</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
