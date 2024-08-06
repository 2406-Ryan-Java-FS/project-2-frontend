import React from "react";
import { Box } from "@mui/material";
import EducatorDashboardHeader from "./educator-dashboard-header";
import EducatorDashboardCourseCard from "./educator-dashboard-course-card";
import { EducatorDashboardProvider, useEducatorDashboardContext } from "./educator-dashboard-context";

export default function EducatorDashboard() {
  const { state } = useEducatorDashboardContext();

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