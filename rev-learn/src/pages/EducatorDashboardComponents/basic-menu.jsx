import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function BasicMenu({ handleOpenEditCourseModal }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        onClick={handleClick} // Open the menu when the button is clicked
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
      <Menu
        anchorEl={anchorEl} // Anchor the menu to the button element
        open={open} // Control the visibility of the menu based on the value of open
        onClose={handleClose} // Close the menu when the user clicks outside of it or selects an item
      >
        <MenuItem
          onClick={() => {
            handleOpenEditCourseModal();
            handleClose(); // Close the menu after selecting the option
          }}
        >
          Edit Course
        </MenuItem>
        <MenuItem onClick={handleClose}>Delete Course</MenuItem>
      </Menu>
    </div>
  );
}
