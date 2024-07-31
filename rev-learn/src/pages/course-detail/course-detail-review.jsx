import {useState, useEffect} from 'react';
import CourseDetailReviewCard from './course-detail-review-card';

export default function CourseDetailReview({courseId}){

    const [enrollmentList, setEnrollmentList] = useState([]);

    // useEffect(() => {
    //      /*I will fetch enrollment list by courseId, then fecth course_review data in there.*/
    //      fetch("http://localhost:8080/enrollments/courses/{courseId}")
    //      .then(res => res.json())
    //      .then(setEnrollmentList)
    //      .error(error => {
    //         console.error(error);
    //      })

    // },[courseId])

    

   
    return(<>
        {/* will map enrollment list  */}
        <h2>Reviews</h2>
        {/* Send each enrollment enformation to a review card */}
        {/* {enrollmentList & enrollmentList.length >0?? enrollmentList.map(enrollment => (
            <CourseDetailReviewCard enrollment={enrollment}/>
        )) } */}
        <CourseDetailReviewCard />
        
    </>)
}