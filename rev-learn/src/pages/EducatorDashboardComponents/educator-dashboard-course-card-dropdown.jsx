import {
  Modal,
  Box,
  Button,
  Typography,
  FormControl,
  FormLabel,
  Grid,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Textarea } from "@mui/joy";
import BasicMenu from "./basic-menu";
import { updateCourse } from "./educator-dashboard-api";
import { useEducatorDashboardContext } from "./educator-dashboard-context";
import EditIcon from "@mui/icons-material/Edit";

const DEFAULT_IMAGE_URL =
  "https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/cats-that-dont-shed/siamese-cat.jpg";

export default function EducatorDashboardCourseCardDropdown({ course }) {
  // Ensure all course fields have default values that are not null
  const initialCourseState = {
    ...course,
    title: course.title || "",
    educatorId: course.educatorId || "",
    description: course.description || "",
    category: course.category || "",
    price: course.price || "",
    creationDate: course.creationDate || "",
    imgUrl: course.imgUrl || "",
  };

  const { state, setState } = useEducatorDashboardContext();

  const [openEditCourseModal, setOpenEditCourseModal] = useState(false);
  const [editedCourse, setEditedCourse] = useState(initialCourseState);

  const handleOpenEditCourseModal = () => setOpenEditCourseModal(true);
  const handleCloseEditCourseModal = () => setOpenEditCourseModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCourse({ ...editedCourse, [name]: value });
  };

  const handleEditCourseSubmit = (event) => {
    event.preventDefault();

    // Ensure imgUrl has a default value if not provided
    const courseData = {
      ...editedCourse,
      imgUrl: editedCourse.imgUrl.trim() || DEFAULT_IMAGE_URL,
    };

    updateCourse(courseData.courseId, courseData)
      .then((response) => {
        handleUpdateCourse(response.data); // Update the state in parent component
        setOpenEditCourseModal(false); // Close the modal
      })
      .catch((error) => {
        console.error("Error updating course: ", error);
      });

    console.log(courseData); // Handle Edit course logic
  };

  const handleUpdateCourse = (updatedCourseFromDB) => {
    // Update the accounts list in state with the updated account
    const updatedCourses = state.courses.map((course) =>
      course.courseId === updatedCourseFromDB.courseId
        ? updatedCourseFromDB
        : course
    );
    setState((prevState) => ({
      ...prevState,
      courses: updatedCourses,
    }));
  };

  return (
    <>
      <BasicMenu
        handleOpenEditCourseModal={handleOpenEditCourseModal}
        editedCourse={editedCourse}
      />

      <Modal open={openEditCourseModal} onClose={handleCloseEditCourseModal}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              position: "relative",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              width: "auto",
              maxWidth: 600,
              margin: "auto",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Edit Course
            </Typography>
            <form onSubmit={handleEditCourseSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Course Title</FormLabel>
                    <TextField
                      autoFocus
                      required
                      name="title"
                      value={editedCourse.title}
                      onChange={handleInputChange}
                      variant="outlined"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Course Description</FormLabel>
                    <Textarea
                      minRows={5}
                      name="description"
                      value={editedCourse.description}
                      onChange={handleInputChange}
                      variant="outlined"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Course Category</FormLabel>
                    <Select
                      value={editedCourse.category}
                      onChange={handleInputChange}
                      displayEmpty
                      inputProps={{
                        "aria-label": "Course Category",
                        name: "category",
                      }}
                      sx={{ zIndex: 1300 }}
                    >
                      <MenuItem value="" disabled>
                        Select a category
                      </MenuItem>
                      <MenuItem value="Web Development">Web Development</MenuItem>
                      <MenuItem value="Data Science">Data Science</MenuItem>
                      <MenuItem value="Mobile Development">Mobile Development</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <FormLabel>Course Price</FormLabel>
                    <TextField
                      required
                      name="price"
                      type="number"
                      value={editedCourse.price}
                      onChange={handleInputChange}
                      variant="outlined"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <FormLabel>Course Creation Date</FormLabel>
                    <TextField
                      type="date"
                      name="creationDate"
                      value={editedCourse.creationDate}
                      onChange={handleInputChange}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Course Image URL</FormLabel>
                    <TextField
                      type="text"
                      name="imgUrl"
                      value={editedCourse.imgUrl}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 2,
                }}
              >
                <Button onClick={handleCloseEditCourseModal} sx={{ marginRight: 1 }}>
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Save Changes
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
