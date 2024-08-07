import React, { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categories = [
  "All",
  "Python",
  "Java",
  "Javascript",
  "Mathematics",
  "Arts",
  "Humanities",
];

const sortOptions = [
  "None",
  "Price: Low to High",
  "Price: High to Low",
  "Rating: Low to High",
  "Rating: High to Low",
];

const SearchBar = (props) => {

  const { courseList, setFilteredCourses } = props;

  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("None");

  const handleSearch = () => {
    onSearch({ course, category, sortOption });
  };

  // course filter
  const onSearch = ({ course, category, sortOption }) => {
    const filtered = courseList.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesCourse =
        course === "" || c.title.toLowerCase().includes(course.toLowerCase());
      return matchesCategory && matchesCourse;
    });

    sortList(sortOption, filtered);
    setFilteredCourses(filtered);
  };


  // Sorts filtered lists by the given sort option
  function sortList(sortOption, filtered) {
    switch (sortOption) {
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "Rating: Low to High":
        filtered.sort((a, b) => a.rating - b.rating);
        break;

      case "Rating: High to Low":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: "100%",
        maxWidth: "800px", // Ensures the container has a maximum width
        padding: 2,
      }}
    >
      <TextField
        label="Course"
        variant="outlined"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        sx={{ width: "300px" }} // Set a fixed width for the Course input
      />
      <TextField
        select
        label="Category"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ width: "200px" }} // Set a fixed width for the Category input
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Sort by"
        variant="outlined"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        sx={{ width: "200px" }} // Set a fixed width for the Category input
      >
        {sortOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ width: "60px" }} // Set a fixed width for the Button
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchBar;
