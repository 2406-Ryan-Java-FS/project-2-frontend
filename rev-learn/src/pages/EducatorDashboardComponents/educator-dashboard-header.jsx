import { useEducatorDashboardContext } from "./educator-dashboard-context";
import EducatorDashboardHeaderAddNewCourse from "./educator-dashboard-header-add-new-course";

export default function EducatorDashboardHeader() {
  const { userData } = useEducatorDashboardContext();

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
        <EducatorDashboardHeaderAddNewCourse />
      </h1>
      <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
    </>
  );
}
