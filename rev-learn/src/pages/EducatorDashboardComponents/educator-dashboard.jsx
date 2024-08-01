import React, { useEffect, useCallback } from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Card,
  Box,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import EditIcon from "@mui/icons-material/Edit";
import placeholderImage from "../../images/blank.png";
import EducatorDashboardHeader from "./educator-dashboard-header";
import EducatorDashboardCoursCardDropdown from "./educator-dashboard-course-card-dropdown";
import { useEducatorDashboardContext } from "./educator-dashboard-context";

export default function EducatorDashboard() {
  const {
    state,
    getCoursesByEducatorId,
    userData,
    getLoggedInUserInformation,
  } = useEducatorDashboardContext();

  useEffect(() => {
    getLoggedInUserInformation();
    if (userData) {
      getCoursesByEducatorId(userData.userId);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      const fetchCourses = async () => {
        try {
          const response = await getCoursesByEducatorId(userData.userId);
          // Handle the response
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      };

      fetchCourses();

      return () => {
        // Cleanup function: No need for cleanup in this case, but you can add if necessary
      };
    }
  }, [userData]);

  function handleDiscussionIconClick() {
    console.log("navigate to destination - discussion page");
  }

  function handleQuizIconClick() {
    console.log("navigate to destination - quiz page");
  }

  return (
    <>
      <EducatorDashboardHeader />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {state.courses.map((course) => (
          <Card
            key={course.courseId}
            sx={{
              position: "relative",
              width: 440,
              margin: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              alt="course image"
              height="150"
              image={course.imgUrl || placeholderImage}
            />
            <EducatorDashboardCoursCardDropdown course={course} />
            <CardContent sx={{ paddingBottom: 0, paddingLeft: 1 }}>
              <Typography sx={{ textAlign: "left" }} variant="h6">
                {course.courseId} - {course.title} <br />
                Educator - {userData.firstName}
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
              <IconButton onClick={handleDiscussionIconClick}>
                <ChatIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton onClick={handleQuizIconClick}>
                <EditIcon sx={{ color: "black" }} />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
