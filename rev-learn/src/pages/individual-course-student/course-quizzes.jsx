import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CourseQuizzes() {
    const { courseId } = useParams();
    const [quizzes, setQuizzes] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await fetch(`/api/courses/${courseId}/quizzes`);
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
            <div>
                <p>No quizzes available for this course.</p>
                <Link to={defaultQuizPage}>
                    <button>Start Default Quiz</button>
                </Link>
                <br/>
            </div>
        );
    }

    return (
        <div>
            <h1>Quizzes for Course {courseId}</h1>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz.quiz_id}>
                        <Link to={`/quizzes/${quiz.quiz_id}`}>
                            {quiz.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
