import cat from '../images/placeholder-image.jpg'
import '../styles/course-styles.css'

export default function CourseCard ( props ) {

    // Student props
    const { role, title, description, category, price, rating } = props;


    const courseTitle = "Javascript for cats"
    const courseImage = cat;
    const courseEducator = "Bob Smith"

    return (

        <>
            <div className="container">
                <div className="course-card">
                    <div>
                        <img className="course-image" src={courseImage} alt={title} draggable='false' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="three-dots" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                        <div className="course-content">
                            <div className="course-header">
                                <div className="course-title">{title}</div>
                            </div>
                            <div className="course-description">{description}</div>
                            <div className="course-rating">
                                <div>{rating}</div>
                                <div className="stars">
                                    {[...Array(Math.round(rating))].map((_, index) => (
                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#eab308" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div className="course-price">{role == "Student" && price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}