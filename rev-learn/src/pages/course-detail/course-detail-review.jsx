import { useState, useEffect } from "react";
import CourseDetailReviewCard from "./course-detail-review-card";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ReviewDialog from "./course-detail-review-dialog";
import "../../styles/course-detail/course-detail-view.css";
import userAccountController from "../../controllers/userAccountController";

export default function CourseDetailReview({ courseId }) {
  const [enrollmentList, setEnrollmentList] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [user, setUser] = useState({});
  const [isUserEnrolled, setIsUserEnrolled] = useState(false);

  useEffect(() => {
    // const loggedInUser = userAccountController.loggedInUser;
    // if (loggedInUser) {
    //   setUser(loggedInUser);
    //   console.log(loggedInUser)
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
    console.log(user);
  }, [user.userId]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      // Simulated API call to fetch enrollments
      const enrollments = [
        {
          enrollmentId: 1,
          studentId: 2,
          courseId: courseId,
          enrollmentDate: "2024-08-01",
          paymentStatus: "complete",
          enrollmentStatus: true,
          courseReview: "Great course!",
          courseRating: 4,
        },
      ];

      // Fetch user details for each enrollment
      const userDetailsMap = {};
      await Promise.all(
        enrollments.map(async (enrollment) => {
          const userResponse = await fetchUserDetails(enrollment.studentId);
          userDetailsMap[enrollment.studentId] = userResponse;
        })
      );

      setEnrollmentList(enrollments);
      setUserDetails(userDetailsMap);

      // Check if user is enrolled in the course
      const enrolled = enrollments.some(
        (enrollment) => enrollment.studentId === user.userId
      );
      setIsUserEnrolled(enrolled);
    };

    const fetchUserDetails = async (userId) => {
      // Simulated API call to fetch user details
      const userResponse = {
        userId: userId,
        firstName: "John",
        lastName: "Doe",
      };
      return userResponse;
    };

    fetchEnrollments();
  }, [courseId, user.userId]);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleReviewSubmit = async (newReview) => {
    // Simulated API call to update the enrollment with the new review
    const updatedEnrollment = {
      enrollmentId: enrollmentList.length + 1,
      studentId: user.userId,
      courseId: courseId,
      enrollmentDate: new Date().toISOString().split("T")[0], // Current date
      paymentStatus: "complete",
      enrollmentStatus: true,
      courseReview: newReview.reviewText,
      courseRating: newReview.rating,
    };

    // Fetch user details for the new enrollment
    const userResponse = {
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    // Update the local state
    setEnrollmentList((prevList) => [updatedEnrollment, ...prevList]);
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [user.userId]: userResponse,
    }));
    handleDialogClose();
  };

  return (
    <>
      <div className="reviews-header">
        <h2>Reviews ({enrollmentList.length})</h2>
        {console.log(user)}
        <Fab
          onClick={handleDialogOpen}
          size="small"
          aria-label="add"
          className="fab"
        >
          <AddIcon />
        </Fab>
      </div>
      <ReviewDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        onSubmit={handleReviewSubmit}
      />
      {enrollmentList.length > 0 &&
        enrollmentList.map((enrollment) => (
          <CourseDetailReviewCard
            key={enrollment.enrollmentId}
            enrollment={enrollment}
            user={userDetails[enrollment.studentId]}
          />
        ))}
    </>
  );
}
