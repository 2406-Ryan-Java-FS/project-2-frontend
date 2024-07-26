import {useState, useEffect} from 'react';

export default function CourseDetailReview({courseId}){

    const [enrollmentList, setEnrollmentList] = useState([]);

    // useEffect(() => {
    //      /*I will fetch enrollment list by courseId, then fecth course_review data in there.*/
    //      fetch("")
    //      .then(res => res.json())
    //      .then(setEnrollmentList)
    //      .error(error => {
    //         console.error(error);
    //      })

    // },[])
   
    return(<>
        {/* will map enrollment list  */}
        <div>reviews</div>
    </>)
}