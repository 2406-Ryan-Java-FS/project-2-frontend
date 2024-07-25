import CourseDetailTabs from "./course-detail-tab";
import { Link } from "react-router-dom";

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
        creation_date: "2024-07-25"
    }

    
    const educatorName = "Educator's Full name"

    function parseDescription(description){
        return description.split('.')[0];
    }

    function pendingEnroll(){
        // POST Enrollment DATA => for 
    }

    return(<div className="container">
        <div className="course-overview"> 
            <div className="course-overview-text">
                <h2>{course.title}</h2>
                <p>{parseDescription(course.description)}</p>
                <p>Educator: {educatorName}</p>
            </div>
            <div className="course-overview-img">
                <img />
                <div className="enrollBtn">
                    <Link to="" onclick={pendingEnroll()}>Add to Cart</Link>
                    {/* if user has enrolled the course */}
                    <Link>Go to the course</Link>
                </div>
            </div>
       
        </div>
        
        <hr/>
       <CourseDetailTabs course={course}/>
    </div>)
}