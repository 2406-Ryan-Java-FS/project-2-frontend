import { useState, useEffect } from "react";
import CourseDetailReviewCard from "./course-detail-review-card";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ReviewDialog from "./course-detail-review-dialog";
import "../../styles/course-detail/course-detail-view.css";

export default function CourseDetailReview({ courseId }) {
  const [enrollmentList, setEnrollmentList] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [user, setUser] = useState({});
  const [enrollment, setEnrollment] = useState(null);

  // Sets the current user from local storage (to make sure it's logged in)
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  // Sets the enrollments list for the course
  // We also have to fetch users for each enrollment in the course
  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        // Fetch enrollments for the course
        const enrollmentsResponse = await fetch(
          `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments/courses/${courseId}`
        );
        const enrollments = await enrollmentsResponse.json();

        // Fetch user details for each enrollment
        const userDetailsMap = {};
        await Promise.all(
          enrollments.map(async (enrollment) => {
            const userResponse = await fetch(
              `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/users/${enrollment.studentId}`
            );
            const user = await userResponse.json();
            userDetailsMap[enrollment.studentId] = user;
          })
        );

        console.log("Fetched user details:", userDetailsMap); // Log user details

        setEnrollmentList(enrollments);
        setUserDetails(userDetailsMap);

        // Find enrollment for the logged-in user
        const userEnrollment = enrollments.find(
          (enrollment) =>
            enrollment.studentId === user.userId &&
            enrollment.paymentStatus === "completed"
        );
        setEnrollment(userEnrollment);
      } catch (error) {
        console.error("Error fetching enrollments or user details:", error);
      }
    };

    if (user.userId) {
      fetchEnrollments();
    }
  }, [courseId, user.userId]);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleReviewSubmit = async (newReview) => {
    newReview.rating = newReview.rating === 0 ? 1 : newReview.rating; // ensures there are no 0 stars selected
    try {
      // Update the existing enrollment with the new review
      const updatedEnrollment = {
        courseRating: newReview.rating,
        courseReview: newReview.reviewText,
      };
      // Update the backend with the new review
      const response = await fetch(
        `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments/review/${enrollment.enrollmentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`, // Correctly format the Authorization header
          },
          body: JSON.stringify(updatedEnrollment),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the enrollment on the backend");
      }

      const updatedEnrollmentResponse = await response.json();

      // Update the local state
      setEnrollmentList((prevList) => [
        updatedEnrollmentResponse,
        ...prevList.filter(
          (en) => en.enrollmentId !== updatedEnrollmentResponse.enrollmentId
        ),
      ]);
      handleDialogClose();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <>
      <div className="reviews-header">
        <h2>Reviews ({enrollmentList.length})</h2>
        {console.log(user)}
        {enrollment && (
          <Fab
            onClick={handleDialogOpen}
            size="small"
            aria-label="add"
            className="fab"
          >
            <AddIcon />
          </Fab>
        )}
      </div>
      <ReviewDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        onSubmit={handleReviewSubmit}
      />
      {enrollmentList.length > 0 &&
        enrollmentList.map((enrollment) => {
          if (enrollment.reviewRate !== 0) {
            console.log("Rendering enrollment:", enrollment);
            console.log(
              "User details for enrollment:",
              userDetails[enrollment.studentId]
            );
            return (
              <CourseDetailReviewCard
                key={enrollment.enrollmentId}
                enrollment={enrollment}
                currUser={userDetails[enrollment.studentId]} // Pass user details here
              />
            );
          }
          return null;
        })}
    </>
  );
}
