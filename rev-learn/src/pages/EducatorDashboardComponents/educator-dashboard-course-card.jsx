import React from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Card,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import EditIcon from "@mui/icons-material/Edit";
import placeholderImage from "../../images/blank.png";
import EducatorDashboardCourseCardDropdown from "./educator-dashboard-course-card-dropdown";
import { useEducatorDashboardContext } from "./educator-dashboard-context";

export default function EducatorDashboardCourseCard({ course }) {
  const { userData } = useEducatorDashboardContext();

  const handleDiscussionIconClick = () => {
    console.log("navigate to destination - discussion page");
  };

  const handleQuizIconClick = () => {
    console.log("navigate to destination - quiz page");
  };

  return (
    <Card
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
      <EducatorDashboardCourseCardDropdown course={course} />
      <CardContent sx={{ paddingBottom: 0, paddingLeft: 1 }}>
        <Typography sx={{ textAlign: "left" }} variant="h6">
          {course.courseId} - {course.title} <br />
          Educator - {userData?.firstName}
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
  );
}
