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
import EducatorDashboardHeader from "./educator-dashboard-header";
import EducatorDashboardCoursCardDropdown from "./educator-dashboard-course-card-dropdown";

export default function EducatorDashboard() {
  const courseDetails = [
    {
      courseId: 1,
      cardTitle: "Intro to Web Development",
      educatorName: "Educator - Miguel Delaney",
      description: "Learn the basics of web development...",
      category: "webDevelopment",
      price: "100",
      creationDate: "2023-01-01",
      imageUrl:
        "https://t4.ftcdn.net/jpg/04/80/12/93/360_F_480129384_xkBXyTdVt1R5F7KBwTD2kDURi7hV97Ad.jpg",
    },
    {
      courseId: 2,
      cardTitle: "Data Structure & Algorithm C++",
      educatorName: "Educator - Barry Marsis",
      description: "Dive deep into data structures...",
      category: "dataScience",
      price: "200",
      creationDate: "2023-02-01",
      imageUrl:
        "https://t4.ftcdn.net/jpg/04/80/12/93/360_F_480129384_xkBXyTdVt1R5F7KBwTD2kDURi7hV97Ad.jpg",
    },
    {
      courseId: 3,
      cardTitle: "Android Mobile Development",
      educatorName: "Educator - Lionel Messi",
      description: "Master Android development...",
      category: "mobileDevelopment",
      price: "150",
      creationDate: "2023-03-01",
      imageUrl:
        "https://t4.ftcdn.net/jpg/04/80/12/93/360_F_480129384_xkBXyTdVt1R5F7KBwTD2kDURi7hV97Ad.jpg",
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
      
      <hr style={{ marginLeft: "8px", marginRight: "8px" }} />

      <Box sx={{ display: 'flex', flexWrap: "wrap" }} >
        {courseDetails.map((course) => (
          <Card
            key={course.courseId}
            sx={{ backgroundColor: '#F36928',
              position: "relative",
              width: 440,
              margin: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                border: 'solid black 1px' 
              },
            }}
          >
            <CardMedia
              component="img"
              alt="course image"
              height="150"
              image="https://t4.ftcdn.net/jpg/04/80/12/93/360_F_480129384_xkBXyTdVt1R5F7KBwTD2kDURi7hV97Ad.jpg"
            />
            <EducatorDashboardCoursCardDropdown course={course} />
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
