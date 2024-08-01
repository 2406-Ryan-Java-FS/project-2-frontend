import { useEffect } from "react";
import { useEducatorDashboardContext } from "./educator-dashboard-context";
import EducatorDashboardHeaderAddNewCourse from "./educator-dashboard-header-add-new-course";

export default function EducatorDashboardHeader() {
  const { userData, getLoggedInUserInformation } =
    useEducatorDashboardContext();

  useEffect(() => {
    getLoggedInUserInformation();
  }, []); // Empty dependency array to ensure this runs only once on mount

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
        {userData ? `${userData.firstName}'s Dashboard` : "Loading..."}
        {/* Educator's Dashboard */}
        <EducatorDashboardHeaderAddNewCourse />
      </h1>
      <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
    </>
  );
}
