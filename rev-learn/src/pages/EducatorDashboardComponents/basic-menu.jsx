import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEducatorDashboardContext } from "./educator-dashboard-context";
import { deleteCourse } from "./educator-dashboard-api";

export default function BasicMenu({ handleOpenEditCourseModal, editedCourse }) {
  const { state, setState } = useEducatorDashboardContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteCourse = () => {
    deleteCourse(editedCourse.courseId)
      .then((response) => {
        if (response.data) {
          setState((prevState) => ({
            ...prevState,
            courses: prevState.courses.filter(
              (course) => course.courseId !== editedCourse.courseId
            ),
          }));
          console.log(`Course with ID ${editedCourse.courseId} deleted.`);
        }
      })
      .catch((error) => {
        console.error("There was an error deleting the course.", error);
      });
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        onClick={handleClick}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "white",
          border: "none",
          paddingLeft: 4,
        }}
      >
        <MoreVertIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleOpenEditCourseModal();
            handleClose(); // Close the menu after selecting the option
          }}
        >
          Edit Course
        </MenuItem>
        <MenuItem onClick={handleDeleteCourse}>Delete Course</MenuItem>
      </Menu>
    </div>
  );
}
