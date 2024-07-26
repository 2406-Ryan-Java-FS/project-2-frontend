import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function EducatorDashboardHeader() {
  return (
    <>
      <h1
        style={{
          position: "relative",
          textAlign: "left",
          marginLeft: "8px",
          marginRight: "8px",
        }}
      >
        Educator's Dashboard
        <IconButton sx={{ position: "absolute", right: 8, color: "black" }}>
          <MoreVertIcon />
        </IconButton>
      </h1>
      <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
    </>
  );
}
