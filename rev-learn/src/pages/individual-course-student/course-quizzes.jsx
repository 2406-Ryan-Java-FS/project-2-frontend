import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SideBar from './course-side-bar';

import "../Quiz/quiz.css";


export default function CourseQuizzes() {
    const { courseId } = useParams();
    const [quizzes, setQuizzes] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await fetch('http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/quizzes');
                if (!response.ok) {
                    throw new Error('Failed to fetch quizzes');
                }
                const data = await response.json();
                setQuizzes(data);
                setError(false);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, [courseId]);

    const defaultQuizPage = "/default-quiz-page"; // Replace with Isidro's default quiz page path

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (error) {
    //     return <div>Error loading quizzes</div>;
    // }

    if (error || quizzes.length === 0) {
        return (
            <>
            {<SideBar />}
            <div>
                <p>No quizzes available for this course. </p>
                <Link to={defaultQuizPage}>
                    <text>   Start Default Quiz </text>
                </Link> 
                <br/>
            </div>
            </>
        );
    }

    return (
        <>
        {<SideBar />}
        <div className='course-quizzes'>
            <br/>
            <br/>
            <br/>
            <h3>Quizzes for Course</h3>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz.quiz_id}>
                        <Link to={`/quiz/${quiz.quizId}`}>
                            {quiz.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}
