import { Typography } from "../../../node_modules/@mui/joy/index";
import { Toolbar } from "../../../node_modules/@mui/material/index";
import EducatorDashboardHeaderAddNewCourse from "./educator-dashboard-header-add-new-course";

export default function EducatorDashboardHeader() {
  return (
    <>

      <Toolbar
        sx={{
          flexGrow: 1, backgroundColor: '#F36928',
          borderRadius: '25px', border: 'solid black 1px',
          justifyContent: 'center'
        }}
        variant="outlined"
        position="relative">

        
        <Typography sx={{ color: 'black', fontSize: '32px' }}>
          Educator Dashboard
        </Typography>

        <EducatorDashboardHeaderAddNewCourse />

      </Toolbar>
    </>
  );
}
