import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const drawerWidth = 240;
const navItems = ['Home', 'Courses', 'Grades', 'Discussions', 'Messages'];
const navItems2 = ['Account', 'Settings', 'Logout']

export default function StudentAppBar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (

    <AppBar variant="outlined" position="static">

      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => { setIsDrawerOpen(true) }
          } >

          <MenuIcon />

        </IconButton>

        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{width:drawerWidth}}>

          <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
            Navigation
          </Typography>

          <Divider />

          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'left' }}>

                <ListItemIcon>
                  {item === 'Messages' ? <MailIcon /> : ""}
                </ListItemIcon>

                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))
          };

          <Divider />

          {navItems2.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'left' }}>
                {/* <ListItemIcon>
                  {key === 'Messages' ? <MailIcon /> : ""}
                </ListItemIcon> */}
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))
          };




        </Drawer>
      </Toolbar>
    </AppBar>
  );
}


//------------------------------------------------------------------------

//Broken functionality


// export default function StudentAppBar(props) {

//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };



//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (

//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />

//         <AppBar component="nav">
//           <Toolbar>

//             <IconButton
//               color="inherit"
//               aria-label="menu"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: 'none' } }}
//             >
//               <MenuIcon />

//             </IconButton>

//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             (Student Name)

//           </Typography>


//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>

//         </Toolbar>
//       </AppBar>

//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
// sx={{
//   display: { xs: 'block', sm: 'none' },
//   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
// }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>

//     </Box>
//   );

// }
