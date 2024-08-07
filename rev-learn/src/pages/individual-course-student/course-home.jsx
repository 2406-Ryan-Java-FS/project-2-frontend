import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/individual-course/home.css";
import SideBar from './course-side-bar';


export default function CourseHome() {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {

        // Fetch course data from the backend
        const fetchCourse = async () => {
            try {
                const response = await fetch(`http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/courses/${courseId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch course details');
                }
                const data = await response.json();
                console.log(data);
                setCourse(data);
            } catch (error) {
                console.error('Error fetching course:', error);
                setError(true);
            }
        };

        fetchCourse();
    }, [courseId]);


    const defaultCourse = {
        title: "Default Course Title",
        description: "This is a default course description because the actual course details could not be fetched."
    };

    if (!course && !error) {
        return <div>Loading...</div>;
    }

    return (<>
        {<SideBar />}
        <div className='student-home-box'>
            <div className="student-home-inner-box">
            <h1>{error ? defaultCourse.title : course.title}</h1>
            <p>{error ? defaultCourse.description : course.description}</p>
            </div>
        
        </div>
    </>
    );
}
