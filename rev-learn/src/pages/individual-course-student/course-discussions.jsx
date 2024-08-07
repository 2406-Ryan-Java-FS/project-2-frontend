import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './course-side-bar';
import "../../styles/individual-course/home.css";

const CourseDiscussions = ({ courseId }) => {
  const [discussions, setDiscussions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}/discussions`);
        const data = await response.json();
        setDiscussions(data);
      } catch (error) {
        console.error("Error fetching discussions:", error);
      }
    };

    fetchDiscussions();
  }, [courseId]);

  const handleContributeClick = (threadId) => {
    navigate(`/discussions/${threadId}`);
  };

  const handleDefaultDiscussionClick = () => {
    navigate('/default-discussion');
  };

  return (
    <>
    {<SideBar />}
    
    <div className='student-home-box'>
      <div className="student-home-inner-box">
        <h2>Course Discussions</h2>
        <ul>
          {discussions.length > 0 ? (
            discussions.map((discussion) => (
              <li key={discussion.thread_id}>
                <h3>{discussion.title}</h3>
                <button onClick={() => handleContributeClick(discussion.thread_id)}>
                  Contribute
                </button>
                <hr/>
              </li>
            ))
          ) : (
            <li>
              <h3 sx={{marginRight:"10px"}}>No discussions available</h3>
              <button className='orange-btn' onClick={handleDefaultDiscussionClick}>
                Contribute to the default discussion
              </button>
              <hr/>
            </li>
          )}
        </ul>
      </div>
    </div>
    </>
  );
};

export default CourseDiscussions;
