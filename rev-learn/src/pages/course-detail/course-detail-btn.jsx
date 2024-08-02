import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CourseDetailBtn({courseId}){
    // const user = useContext();
    const {user} = useContext();
    const [enrollment, setEnrollment] = useState();
    const userId = 2;

    //Check if the user has enrolled to the course or not.
    useEffect(() => {
        // const jwtToken = localStorage.getItem('token');
        // if(!token){
        //     return Promise.reject('Unauthorized.');
        // }
        // const init = {
        //     headers: {
        //         "Authorization": "Bearer "+token
        //     }
        // }

        
        fetch(`http://localhost:8080/enrollments/${userId}/courses/${courseId}`)
            .then(res => res.json())
            .then(body => {
                setEnrollment(body);
            })
            .catch(error => {
                console.error(error);
            });
    },[courseId, userId])

    function pendingEnroll(){
            // POST Enrollment DATA => for 
    
            const newEnrollment = {
                // studentId: user.userId,
                studentId: userId,
                courseId: courseId,
                paymentStatus: 'pending',
                enrollmentStatus: false,
                courseRating: null,
                courseReview: null
    
            }
    
            const config = {
                method:"POST",
                header:{
                    'content-Type': 'application/json',
                },
                body: JSON.stringify(newEnrollment)
            };
    
            fetch("http://localhost:8080/enrollments",config)
            .then(res => {
                if(res.ok){
                 
                }else{
                    return res.json();
                }
            })
            .then(err => {
                if(err){
                    return Promise.reject(err);
                }
            })
            .catch(errs => {
                console.error(errs);
            });
        }

    return(
        <div className="enrollBtn">
        {enrollment==null?<button type="submit" onsubmit={pendingEnroll()}>Add to Cart</button>
       :<Link type="button">Go to the course</Link>}
    </div>);
}