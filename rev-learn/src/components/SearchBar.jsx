import React, { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const sortOptions = [
  "None",
  "Price: Low to High",
  "Price: High to Low",
  "Rating: Low to High",
  "Rating: High to Low",
];

const SearchBar = (props) => {

  const { courseList, setFilteredCourses, uniqueCategories } = props;

  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("None");
  const [filtersActive, setFiltersActive] = useState(false);

  const handleSearch = () => {
    onSearch({ course, category, sortOption });
  };

  const handleClearFilters = () => {
    setCourse("");
    setCategory("All");
    setSortOption("None");
    // search with default val as it waits for setStates to update
    onSearch({ course: "", category: "All", sortOption: "None" });
    setFiltersActive(false);
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
    setFiltersActive(filtered.length !== courseList.length || course !== "" || category !== "All" || sortOption !== "None");
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
  <>
    <Box
      sx={{
        position: "relative",
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
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <TextField
        select
        label="Category"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ width: "200px" }} // Set a fixed width for the Category input
        SelectProps={{
          renderValue: (selected) => selected,
        }}
      >
        {uniqueCategories.map((option) => (
          <MenuItem key={option.name} value={option.name}>
            {option.name} ({option.count})
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
      {filtersActive && 
      (
        <Button
        variant="outlined"
        onClick={handleClearFilters}
        sx={{ 
          width: "120px",
          position: "absolute",
          bottom: "0",
          right: "0",
          transform: "translate(-10px, 30px)",
          fontSize: "0.8rem",
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderColor: "gray",
          color: "gray", 
          "&:hover": {
            borderColor: "black",
            color: "black",
          },
        }}
        >
        <div style={{
          transform: "translate(0, 1px)",
        }}>Clear all</div>
        <CloseIcon 
          sx={{
            transform: "translate(2px, -1px)",
          }} 
        />
        </Button>
      )
      }
    </Box>
  </>
  );
};

export default SearchBar;
