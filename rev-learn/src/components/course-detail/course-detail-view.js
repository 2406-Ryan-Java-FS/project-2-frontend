import { useState, useEffect } from "react";
import CourseDetailTabs from "./course-detail-tab";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CategoryCrumb from "./category-crumb";
import '../../styles/course-detail/course-detail-view.css';

export default function CourseDetailView(){
    //Routes: /courses/{id} or /courses/detail/{id}
    //considering each course data will be delivered from the course catalog.
    const course = {
        courseId: 1,
        educatorId: 1,
        title: "Course_Title",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor lacinia luctus blandit quisque lacinia faucibus. Quisque mattis lorem odio et erat enim aenean volutpat suscipit. Scelerisque netus euismod metus augue diam sagittis aliquam rhoncus scelerisque. Senectus litora nostra iaculis, euismod porta ex mus. Potenti libero erat amet elementum dui fusce at class. Amet nisi lectus nascetur; euismod ultrices dapibus senectus ornare. Aliquet cursus senectus tempor pretium fermentum mattis ante.",
        category: "Python",
        price: 21.99,
        creation_date: "2024-07-25",
        imgUrl:"https://cdn.pixabay.com/photo/2024/03/29/17/55/ai-generated-8663328_1280.png"
    }

    // const [course,SetCourse] = useState([]);

    //TODO: Fetch course object!
    // useEffect(() => {
    //     fetch()
    //     .then(res => res.json())
    //     .then(setCourse)
    //     .catch(error => console.error(error))
    // },[courseId])



    
    const educatorName = "Educator's Full name"

    function parseDescription(description){
        const parsed = description.split('.');
        return parsed[0] + ". " + parsed[1]+".";
    }

    function pendingEnroll(){
    //     // POST Enrollment DATA => for 

    //     const enrollment = {
    //         studentId: user.userId,
    //         courseId: course.courseId,
    //         paymentStatus: 'pending'

    //     }

    //     const config = {
    //         method:"POST",
    //         header:{
    //             'content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(enrollment)
    //     };

    //     fetch(,config)
    //     .then(res => {
    //         if(res.ok){
    //             toast.success("Added to a cart succesfully")
    //             navigate("to a cart page?")
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

    return(<div className="course-detail-box">
        <CategoryCrumb course={course} />
        <div className="course-overview"> 
            <div className="course-overview-text">
                <h2>{course.title}</h2>
                <p>{parseDescription(course.description)}</p>
                <p>Educator: {educatorName}</p>
            </div>
            <div className="course-overview-img">
                <img src={course.imgUrl} alt="course relate picture" width="300px" />
                <div className="price-box">${course.price}</div>
                <div className="enrollBtn">
                    <Button type="submit" onsubmit={pendingEnroll()}>Add to Cart</Button>
                    {/* if user has enrolled the course */}
                    <Link type="button">Go to the course</Link>
                </div>
            </div>
       
        </div>
        
        <hr/>
       <CourseDetailTabs course={course}/>
    </div>)
}