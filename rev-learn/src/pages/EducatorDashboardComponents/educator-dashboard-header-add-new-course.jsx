import { useState } from "react";
import {
  IconButton,
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
import Textarea from "@mui/joy/Textarea";
import AddIcon from "@mui/icons-material/Add";
import { useEducatorDashboardContext } from "./educator-dashboard-context";
import { createNewCourse } from "./educator-dashboard-api";

export default function EducatorDashboardHeaderAddNewCourse() {
  const { state, setState, handleInputChange, educatorData } =
    useEducatorDashboardContext();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    resetNewCourse();
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  const resetNewCourse = () => {
    setState((prevState) => ({
      ...prevState,
      newCourse: {
        courseId: "",
        educatorId: educatorData ? educatorData.educatorId : "",
        title: "",
        description: "",
        category: "",
        price: "",
        imgUrl: "",
        creationDate: "",
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewCourse(state.newCourse)
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          courses: [...prevState.courses, response.data],
          newCourse: {
            courseId: "",
            educatorId: educatorData ? educatorData.educatorId : "",
            title: "",
            description: "",
            category: "",
            price: "",
            imgUrl: "",
            creationDate: "",
          },
        }));
      })
      .catch((error) => {
        console.error("There was an error creating the course.", error);
      });
    setOpenModal(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpenModal}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          color: "black",
          border: "none",
        }}
      >
        <AddIcon />
      </IconButton>
      <Modal open={openModal} onClose={handleCloseModal}>
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
          <DialogTitle>Create New Course</DialogTitle>
          <DialogContent>Fill in the course information.</DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <FormLabel>Course Title</FormLabel>
                  <Input
                    autoFocus
                    required
                    type="text"
                    name="title"
                    value={state.newCourse.title}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <FormLabel>Educator ID</FormLabel>
                  <Input
                    required
                    type="number"
                    name="educatorId"
                    value={
                      educatorData ? educatorData.educatorId : "Loading..."
                    }
                    onChange={handleInputChange}
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Course Description</FormLabel>
                  <Textarea
                    minRows={7}
                    name="description"
                    value={state.newCourse.description}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Course Category</FormLabel>
                  <Select
                    name="category"
                    value={state.newCourse.category}
                    onChange={handleInputChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Course Category" }}
                    sx={{ zIndex: 1300 }} // Ensures it's above the modal content
                  >
                    <MenuItem value="" disabled>
                      Select a category
                    </MenuItem>
                    <MenuItem value="Web Development">Web Development</MenuItem>
                    <MenuItem value="Data Science">Data Science</MenuItem>
                    <MenuItem value="Mobile Development">
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
                    type="number"
                    value={state.newCourse.price}
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
                    value={state.newCourse.creationDate}
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
                    name="imgUrl"
                    value={state.newCourse.imgUrl}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
            >
              <Button onClick={handleCloseModal} sx={{ marginRight: 1 }}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Create Course
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
}