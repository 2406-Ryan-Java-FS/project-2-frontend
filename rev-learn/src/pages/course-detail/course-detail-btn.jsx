import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CourseDetailBtn({ courseId }) {
  const [enrollment, setEnrollment] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedInUser);

    if (loggedInUser) {
      fetchEnrollment(loggedInUser, courseId);
    }

  }, [courseId]);

  const fetchEnrollment = async (loggedInUser, courseId) => {
    try {
      const response = await fetch(`http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments/students/${loggedInUser.userId}/courses/${courseId}`, {
        method: "GET",
        headers: {
          'Authorization': "Bearer " + loggedInUser.token,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setEnrollment(data);
    } catch (error) {
      console.error(error);
    }
  };

  const pendingEnroll = async (evt) => {
    evt.preventDefault();
    // if (!user) return;
    if (!user) {
      navigate('/signin');
      return;
    }

    const newEnrollment = { 
      studentId: user?.userId,
      courseId: courseId,
      paymentStatus: "pending",
      enrolled: false,
      courseReview: null,
    };

    try {
      const response = await fetch("http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          'Authorization': "Bearer " + user.token,
        },
        body: JSON.stringify(newEnrollment),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }

      const data = await response.json();
      setEnrollment(data);  // Update the state with the new enrollment data
      navigate(`/course/detail/${courseId}`);
    } catch (error) {
      console.error(error);
      navigate('/signin');
    }
  };

  if(!user){
    return(
      <div className="enrollBtn">
        <Link to={`/signin`} type="button" className="grey-btn add-cart-btn go-to-course">
          Add to Cart
        </Link>
      </div>
    );
  }
  return (
    <div className="enrollBtn">
      {enrollment === null ? (
        <button className="grey-btn add-cart-btn" type="button" onClick={pendingEnroll}>
          Add to Cart
        </button>
      ) : enrollment.enrolled === false? (
        <Link to={`/payment`} type="button" className="grey-btn add-cart-btn go-to-course">
          Already added to cart<br/>
          Go to cart
        </Link>
      
      ) : (
        <Link to={`/courses/${courseId}`} type="button" className="grey-btn add-cart-btn go-to-course">
          Go to the course
        </Link>
      )}
    </div>
  );
}
