import { Typography } from "../../../node_modules/@mui/joy/index";
import EducatorDashboardHeaderAddNewCourse from "./educator-dashboard-header-add-new-course";

export default function EducatorDashboardHeader() {
  return (
    <>
      {/* <h1
        style={{
          position: "relative",
          textAlign: "center",
          marginLeft: "8px",
          marginRight: "8px",
          backgroundColor: '#F36928',
          borderRadius: '25px'
        }} >*/}

         <Typography 
         sx={{ flexGrow: 1, backgroundColor: '#F36928', 
         borderRadius: '25px', color: 'black', fontSize: '24px' }}>
          Educator's Dashboard
          <EducatorDashboardHeaderAddNewCourse />
        </Typography>

      {/* </h1> */}
      <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
    </>
  );
}
