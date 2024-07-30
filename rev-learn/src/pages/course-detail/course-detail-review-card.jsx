import { useEffect } from "react";
import Rating from '@mui/material/Rating';
import "../../styles/course-detail/review-card.css";


export default function CourseDetailReviewCard(enrollment){
    const enrollmentO = {
        enrollmentId : 1,
        studentId : 1,
        courseId: 1,
        enrollmentDate:"2024-08-01",
        paymentStatus: "complete",
        enrollmentStatus: true,
        courseReview: "Great overview of AWS topics required for the CCP exam, as well as in depth hands-on labs. After taking this course and some of Neal's additional practice exams, I was able to pass the CCP exam quickly with no problems.",
        courseRating:4

    }

    // with useEffect hooks, fetch student's username or their names.


    return(<div className="review-card">
        <div className="review-top">
            <div className="user-profile">
                <img id="review-profile" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" alt="user profile" width="100px"/>
            </div>
            <div className="review-rates">
                <div className="review-username">
                    <span>Jeani P.</span>
                </div>
                <div className="star-rating">
                <Rating name="read-only" value={enrollmentO.courseRating} readOnly />
                </div>
            </div>
        </div>
        <div className="review-content">
            {enrollmentO.courseReview}

        </div>
    </div>)
}