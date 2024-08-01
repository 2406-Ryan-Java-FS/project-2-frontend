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
import { useState } from "react";

export default function EducatorDashboardHeaderAddNewCourse() {
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState("");
  const [courseDate, setCourseDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (event) => {
    setCourseDate(event.target.value);
  };

  const handleImageUrlChange= (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <>
      <IconButton
        onClick={handleOpenModal}
        sx={{
          position: "absolute",
          right: 8,
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
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpenModal(false);
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <FormLabel>Course Title</FormLabel>
                  <Input autoFocus required />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <FormLabel>Educator ID</FormLabel>
                  <Input required />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Course Description</FormLabel>
                  <Textarea minRows={7} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Course Category</FormLabel>
                  <Select
                    value={category}
                    onChange={handleCategoryChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Course Category" }}
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
                  <Input required />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <FormLabel>Course Creation Date</FormLabel>
                  <TextField
                    type="date"
                    value={courseDate}
                    onChange={handleDateChange}
                    fullWidth
                    InputLabelProps={{ shrink: true }} // Ensures the label is displayed correctly
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Course Image URL (default)</FormLabel>
                  <TextField
                    type="text"
                    value="https://t4.ftcdn.net/jpg/04/80/12/93/360_F_480129384_xkBXyTdVt1R5F7KBwTD2kDURi7hV97Ad.jpg"
                    onChange={handleImageUrlChange}
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
