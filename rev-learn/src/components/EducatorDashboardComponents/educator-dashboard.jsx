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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import placeholderImage from "../../images/blank.png";
import EducatorDashboardHeader from "./educator-dashboard-header";

export default function EducatorDashboard() {
  const courseDetails = [
    {
      courseId: 1,
      cardTitle: "Intro to Web Development",
      educatorName: "Educator - Miguel Delaney",
    },
    {
      courseId: 2,
      cardTitle: "Data Structure & Algorithm C++",
      educatorName: "Educator - Barry Marsis",
    },
    {
      courseId: 3,
      cardTitle: "Adnroid Mobile Development",
      educatorName: "Educator - Lionel Messi",
    },
  ];

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
        {courseDetails.map((course) => (
          <Card
            key={course.courseId}
            sx={{ position: "relative", width: 440, margin: "8px" }}
          >
            <CardMedia
              component="img"
              alt="course image"
              height="150"
              image={placeholderImage}
            />
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "white",
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <CardContent sx={{ paddingBottom: 0, paddingLeft: 1 }}>
              <Typography sx={{ textAlign: "left" }} variant="h6">
                {course.courseId} - {course.cardTitle} <br />
                {course.educatorName}
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
