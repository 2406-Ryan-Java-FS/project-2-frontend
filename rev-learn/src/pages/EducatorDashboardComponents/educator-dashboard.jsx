import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EducatorDashboardHeader from "./educator-dashboard-header";
import EducatorDashboardCourseCard from "./educator-dashboard-course-card";
import { useEducatorDashboardContext } from "./educator-dashboard-context";

export default function EducatorDashboard() {
  const { state, loading, userData } = useEducatorDashboardContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is a student
    if ( (!loading && userData && userData.role === "student") || localStorage.loggedInUser === undefined) {
      // Redirect to the student page if user is a student
      navigate("/student");
    }
  }, [userData, loading, navigate]);

  if (loading) {
    return <Typography>Loading...</Typography>; // Show loading state
  }

  return (
    <>
      <EducatorDashboardHeader />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {state.courses.map((course, index) => (
          <EducatorDashboardCourseCard key={course.courseId} course={course} index={index + 1} />
        ))}
      </Box>
    </>
  );
}
