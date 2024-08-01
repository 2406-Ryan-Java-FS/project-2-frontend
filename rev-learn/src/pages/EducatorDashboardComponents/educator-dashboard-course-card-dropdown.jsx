import {
  Modal,
  Box,
  Button,
  DialogTitle,
  DialogContent,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Textarea } from "@mui/joy";
import BasicMenu from "./basic-menu";

export default function EducatorDashboardCoursCardDropdown({ course }) {
  const [openEditCourseModal, setOpenEditCourseModal] = useState(false);
  const [editedCourse, setEditedCourse] = useState(course);

  const handleOpenEditCourseModal = () => setOpenEditCourseModal(true);
  const handleCloseEditCourseModal = () => setOpenEditCourseModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCourse({ ...editedCourse, [name]: value });
  };

  return (
    <>
      <BasicMenu handleOpenEditCourseModal={handleOpenEditCourseModal} />

      <Modal open={openEditCourseModal} onClose={handleCloseEditCourseModal}>
        <Box
          sx={{
            position: "relative",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: "auto",
            maxWidth: 600,
            margin: "auto",
          }}
        >
          <DialogTitle>Edit Course</DialogTitle>
          <DialogContent>Edit the course information.</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(editedCourse); // Handle Edit course logic
              setOpenEditCourseModal(false);
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <FormLabel>Course Title</FormLabel>
                  <Input
                    autoFocus
                    required
                    name="cardTitle"
                    value={editedCourse.cardTitle}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <FormLabel>Educator ID</FormLabel>
                  <Input
                    required
                    name="educatorName"
                    value={editedCourse.educatorName}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Course Description</FormLabel>
                  <Textarea
                    minRows={7}
                    name="description"
                    value={editedCourse.description}
                    onChange={handleInputChange}
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
                    sx={{ zIndex: 1300 }} // Ensures it's above the modal content
                  >
                    <MenuItem value="" disabled>
                      Select a category
                    </MenuItem>
                    <MenuItem value="webDevelopment">Web Development</MenuItem>
                    <MenuItem value="dataScience">Data Science</MenuItem>
                    <MenuItem value="mobileDevelopment">
                      Mobile Development
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <FormLabel>Course Price</FormLabel>
                  <Input
                    required
                    name="price"
                    value={editedCourse.price}
                    onChange={handleInputChange}
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
                    InputLabelProps={{ shrink: true }} // Ensures the label is displayed correctly
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Course Image URL</FormLabel>
                  <TextField
                    type="text"
                    value={editedCourse.imageUrl}
                    onChange={handleInputChange}
                    fullWidth
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
              <Button
                onClick={handleCloseEditCourseModal}
                sx={{ marginRight: 1 }}
              >
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Edit Course
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
}
