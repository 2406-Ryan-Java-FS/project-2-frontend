import { useState } from "react";
import {
  IconButton,
  Modal,
  Box,
  Button,
  DialogTitle,
  FormControl,
  FormLabel,
  Grid,
  Select,
  MenuItem,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import AddIcon from "@mui/icons-material/Add";
import { useEducatorDashboardContext } from "./educator-dashboard-context";
import { createNewCourse } from "./educator-dashboard-api";

const DEFAULT_IMAGE_URL =
  "https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/cats-that-dont-shed/siamese-cat.jpg";

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

    // Ensure imgUrl has a default value if not provided
    const courseData = {
      ...state.newCourse,
      imgUrl: state.newCourse.imgUrl.trim() || DEFAULT_IMAGE_URL,
    };

    createNewCourse(courseData)
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
            imgUrl: "", // Reset imgUrl for next course creation
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
      <Tooltip title="Add New Course">
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
      </Tooltip>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
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
              Create New Course
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Course Title</FormLabel>
                    <TextField
                      autoFocus
                      required
                      type="text"
                      name="title"
                      value={state.newCourse.title}
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
                      value={state.newCourse.description}
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
                      name="category"
                      value={state.newCourse.category}
                      onChange={handleInputChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Course Category" }}
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
                      value={state.newCourse.price}
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
                      value={state.newCourse.creationDate}
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
                      value={state.newCourse.imgUrl}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
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
        </Box>
      </Modal>
    </>
  );
}