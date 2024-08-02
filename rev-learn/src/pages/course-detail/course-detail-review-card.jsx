import { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import "../../styles/course-detail/review-card.css";

export default function CourseDetailReviewCard({ enrollment }) {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        if (enrollment && enrollment.studentId) {
            fetch(`http://localhost:8080/users/${enrollment.studentId}`)
                .then(res => res.json())
                .then(setStudent)
                .catch(err => console.error(err));
        }
    }, [enrollment]);

    if (!enrollment) {
        return null;
    }

    return (
        <div className="review-card">
            <div className="review-top">
                <div className="user-profile">
                    <img id="review-profile" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" alt="user profile" width="100px" />
                </div>
                <div className="review-rates">
                    <div className="review-username">
                        {student ? (
                            <span>{student.firstName} {student.lastName}</span>
                        ) : (
                            <span>Loading...</span>
                        )}
                    </div>
                    <div className="star-rating">
                        <Rating name="read-only" value={enrollment.courseRating} readOnly />
                    </div>
                </div>
            </div>
            <div className="review-content">
                {enrollment.courseReview}
            </div>
        </div>
    );
}
