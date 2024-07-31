import { useContext, useState } from "react";
export default function CourseDetailBtn(){
    // const user = useContext();
    // const [enrollment, setEnrollment] = useState();

    function pendingEnroll(){
        //     // POST Enrollment DATA => for 
    
        //     const newEnrollment = {
        //         studentId: user.userId,
        //         courseId: course.courseId,
        //         paymentStatus: 'pending',
                //    enrollmentStatus: false,
                //    courseRating: null,
                //    courseReview: null
    
        //     }
    
        //     const config = {
        //         method:"POST",
        //         header:{
        //             'content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(newEnrollment)
        //     };
    
        //     fetch("http://localhost:8080/enrollments",config)
        //     .then(res => {
        //         if(res.ok){
        //             toast.success("Added to a cart succesfully")
        //          
        //         }else{
        //             return res.json();
        //         }
        //     })
        //     .then(err => {
        //         if(err){
        //             toast.error("Adding a course failed :(");
        //             return Promise.reject(err);
        //         }
        //     })
        //     .catch(errs => {
        //         console.error(error);
        //     });
        }

    return(
        <div className="enrollBtn">
        {enrollment==null?<Button type="submit" onsubmit={pendingEnroll()}>Add to Cart</Button>
       :<Link type="button">Go to the course</Link>}
    </div>);
}