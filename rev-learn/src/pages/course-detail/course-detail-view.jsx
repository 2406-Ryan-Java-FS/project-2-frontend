import { useState, useEffect } from "react";
import CourseDetailTabs from "./course-detail-tab";
import { useParams } from "react-router-dom";
import CategoryCrumb from "./category-crumb";
import '../../styles/course-detail/course-detail-view.css';
import CourseDetailBtn from "./course-detail-btn";

export default function CourseDetailView(){

    const {courseId} = useParams();
    const [course, setCourse] = useState([]);
    const [educator, setEducator] = useState();

    //TODO: Fetch course object!
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const courseResponse = await fetch(`http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/courses/${courseId}`);
                const courseData = await courseResponse.json();
                setCourse(courseData);
    
                if (courseData) {
                    const educatorResponse = await fetch(`http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/users/${courseData.educatorId}`);
                    const educatorData = await educatorResponse.json();
                    setEducator(educatorData);
                }
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchCourse();
        
    },[courseId])

    // function parseDescription(description){
    //     // const parsed = description.split('.');
    //     // return parsed[0] + ". " + parsed[1]+".";
    //     return "description";
    // }

    

    return(<div className="course-detail-box">
        <CategoryCrumb course={course} />
        <div className="course-overview"> 
            <div className="course-overview-text">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                {educator? <p>Instructor: {educator.user.firstName} {educator.user.lastName}</p>:<p></p>}
            </div>
            <div className="course-overview-img">
                <img src={course.imgUrl} alt="course relate picture" width="300px" />
                <div className="price-box">${course.price}</div>
                <CourseDetailBtn courseId = {courseId} />
            </div>
       
        </div>
        
        <hr/>
       <CourseDetailTabs course={course} educator={educator}/>
    </div>)
}