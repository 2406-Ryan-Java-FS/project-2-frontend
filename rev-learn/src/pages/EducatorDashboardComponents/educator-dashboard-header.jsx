import { Typography } from "../../../node_modules/@mui/joy/index";
import { Toolbar } from "../../../node_modules/@mui/material/index";
import EducatorDashboardHeaderAddNewCourse from "./educator-dashboard-header-add-new-course";
import { IconButton } from "../../../node_modules/@mui/joy/index";
import MenuIcon from '@mui/icons-material/Menu';

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
        position="static">

        
        <Typography sx={{ color: 'black', fontSize: '32px' }}>
          Educator Dashboard
        </Typography>

        <EducatorDashboardHeaderAddNewCourse />

      </Toolbar>
    </>
  );
}
