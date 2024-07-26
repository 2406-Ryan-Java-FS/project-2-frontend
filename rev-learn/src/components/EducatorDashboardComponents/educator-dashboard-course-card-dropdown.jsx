import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import MenuButton from "@mui/joy/MenuButton";

export default function EducatorDashboardCoursCardDropdown() {
    return (
      <>
        <Dropdown>
          <MenuButton
            component={IconButton}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              border: "none",
            }}
          >
            <MoreVertIcon />
          </MenuButton>
          <Menu>
            <MenuItem>Edit Course</MenuItem>
            <MenuItem>Delete Course</MenuItem>
          </Menu>
        </Dropdown>
      </>
    );
}