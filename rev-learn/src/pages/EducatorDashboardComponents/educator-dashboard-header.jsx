import React from "react";
import { Box } from "@mui/material";
import EducatorDashboardHeaderAddNewCourse from "./educator-dashboard-header-add-new-course";
import { useEducatorDashboardContext } from "./educator-dashboard-context";
import userAccountController from "../../controllers/userAccountController";

export default function EducatorDashboardHeader() {
  const { userData } = useEducatorDashboardContext();

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "left",
        margin: "8px",
        display: "flex",
        flexDirection: "column", // Ensure header and <hr> are stacked vertically
        alignItems: "flex-start", // Align items to the start of the container
      }}
    >
      <h1 style={{ margin: 0 }}>
        {/* Changed because re-render wasn't happening */}
        {userAccountController.getLoggedInUser()?.user?.firstName} Dashboard
        {/* {userData ? `${userAccountController.getLoggedInUser().user.firstName}'s Dashboard` : "Loading..."} */}
      </h1>
      <EducatorDashboardHeaderAddNewCourse />
      <hr
        style={{ width: "100%", border: "1px solid black", margin: "8px 0" }}
      />
      
    </Box>
  );
}
