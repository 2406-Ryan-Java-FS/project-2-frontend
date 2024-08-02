import { useState, useEffect } from 'react';
import CourseDetailReviewCard from './course-detail-review-card';

export default function CourseDetailReview({ courseId }) {
    const [enrollmentList, setEnrollmentList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/enrollments/courses/${courseId}`)
            .then(res => res.json())
            .then(body => {
                setEnrollmentList(body);
            })
            .catch(error => {
                console.error(error);
            });
    }, [courseId]);

    return (
        <>
            <h2>Reviews</h2>
            {enrollmentList && enrollmentList.length > 0 ? (
                enrollmentList.map(enrollment => (
                    <CourseDetailReviewCard key={enrollment.enrollmentId} enrollment={enrollment} />
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </>
    );
}
