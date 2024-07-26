import EducatorDashboardHeaderAddNewCourse from "./educator-dashboard-header-add-new-course";

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
        <EducatorDashboardHeaderAddNewCourse />
      </h1>
      <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
    </>
  );
}
