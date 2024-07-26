import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import MenuButton from "@mui/joy/MenuButton";

export default function EducatorDashboardHeaderDropdown() {
  return (
    <>
      <Dropdown>
        <MenuButton
          component={IconButton}
          sx={{
            position: "absolute",
            right: 8,
            color: "black",
            border: "none",
          }}
        >
          <MoreVertIcon />
        </MenuButton>
        <Menu>
          <MenuItem>Add New Course</MenuItem>
        </Menu>
      </Dropdown>
    </>
  );
}
