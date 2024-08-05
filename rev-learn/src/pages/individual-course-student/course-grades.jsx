import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import SideBar from './course-side-bar';

const CourseGrades = () => {
  const { courseId } = useParams();
  const [grades, setGrades] = useState([]);
  const [error, setError] = useState(false);

  const defaultGrades = [
    { name: 'What is React?', score: '95/100' },
    { name: 'How do we create a react application?', score: '90/100' },
    { name: 'What are React components?', score: '19/20' },
    { name: 'What are React hooks?', score: '4/5' },
    { name: 'Explain 5 different React hooks?', score: '99/100' },
  ];

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}/grades`);
        if (!response.ok) {
          throw new Error('Failed to fetch grades');
        }
        const data = await response.json();
        setGrades(data);
        setError(false);
      } catch (error) {
        console.error('Error fetching grades:', error);
        setError(true);
      }
    };

    fetchGrades();
  }, [courseId]);

//   if (error) {
//     return <div>Error loading grades</div>;
//   }

const gradesToShow = error ? defaultGrades : grades;

  return (
    <>
    {<SideBar />}
    
   <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Box sx={{ width: '100%', maxWidth: 600, padding: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
            Grades
        </Typography>
        <Card variant="outlined">
        <CardContent>
            {gradesToShow.length === 0 ? (
              <Typography variant="body1">No grades available</Typography>
            ) : (
              gradesToShow.map((grade, index) => (
                <Box key={index} display="flex" justifyContent="space-between" sx={{ marginBottom: 1 }}>
                  <Typography variant="body1">{grade.name}</Typography>
                  <Typography variant="body1">{grade.score}</Typography>
                </Box>
              ))
            )}
          </CardContent>
        </Card>
        </Box>
    </Container>
    </>
  );
};

export default CourseGrades;
