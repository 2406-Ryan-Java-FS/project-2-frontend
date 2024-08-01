import '../../styles/course-styles.css'

export default function CourseCard ( props ) {

    // Student props
    // const { image, role, title, description, category, price, rating } = props;
    const { image, imageStatic, role, title, description, price, rating, enrolled } = props;
    // const courseImage = "https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/cats-that-dont-shed/siamese-cat.jpg";

    return (

        <>
            <div className="container">
                <div className="course-card">
                    <div>
                        <div className='courseImageContainer'>
                            <img className="course-image" src={image ? image : imageStatic} alt={title} draggable='false'
                            />
                        </div>
                        <div className="course-content">
                            <div className="course-header">
                                <div className="course-title">{title}</div>
                            </div>
                            <div className="course-description"> <span className='descriptionSpan'>Description:</span> {description}</div>

                            {enrolled ?

                                (
                                    <div className="enrolledContinueButton">

                                        <div className="enrolledContinueButtonText">Continue Course</div>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg> */}
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <div className="course-rating">
                                            <div>{rating ? rating : <span className='noReviews'>No reviews</span>}</div>
                                            {rating && (
                                                <div className="stars">
                                                    {[...Array(Math.round(rating))].map((_, index) => (
                                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#eab308" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="course-price">{role === "Student" && `$${price}`}</div>
                                    </div>
                                )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}