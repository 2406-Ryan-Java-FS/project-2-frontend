import React from "react";
import { Box, Typography } from "@mui/material";
import EducatorDashboardHeader from "./educator-dashboard-header";
import EducatorDashboardCourseCard from "./educator-dashboard-course-card";
import { useEducatorDashboardContext } from "./educator-dashboard-context";

export default function EducatorDashboard() {
  const { state, loading } = useEducatorDashboardContext();

  if (loading) {
    return <Typography>Loading...</Typography>; // Show loading state
  }

  return (
    <>
      <EducatorDashboardHeader />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {state.courses.map((course) => (
          <EducatorDashboardCourseCard key={course.courseId} course={course} />
        ))}
      </Box>
    </>
  );
}