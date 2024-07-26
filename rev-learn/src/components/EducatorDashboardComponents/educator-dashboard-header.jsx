import EducatorDashboardHeaderDropdown from "./educator-dashboard-header-dropdown";

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
        <EducatorDashboardHeaderDropdown />
      </h1>
      <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
    </>
  );
}
