import * as React from 'react';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const navItems = ['Home', 'Courses', 'Grades', 'Discussions', 'Messages'];
const navItems2 = ['Account', 'Settings', 'Logout']

export default function StudentAppBar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [state, setState] = useState(false);


  
  return (
    <>

      <Toolbar sx={{
        flexGrow: 1, backgroundColor: '#F36928',
        borderRadius: '25px', color: 'black', fontSize: '32px',
        border: 'solid black 1px'
      }}
        variant="outlined"
        position="static"
      >

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => { setIsDrawerOpen(true) }
          } >

          <MenuIcon />

        </IconButton>

        <Typography
          sx={{
            flexGrow: 1, backgroundColor: '#F36928',
            color: 'black', fontSize: '32px'
          }}>
          Student Dashboard
        </Typography>

        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          // PaperProps allows us to resize the meu
          PaperProps={{
            sx: { width: "25%" }
          }}>

          <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
            (Student Name)
          </Typography>

          <Divider />

          {/* //THIS SECTION HANDLES MENU BUTTON NAVIGATION  */}
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>

              {/* //------------------------------------------------ */}

              {item === 'Home' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="a"
                href='/'
                onClick={() => {
                  console.info("HOME BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Courses' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("COURSES BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Grades' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("GRADES BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Discussions' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("DISCUSSIONS BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Messages' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("MESSAGES BUTTON TEST");
                }}>
                {/* <ListItemIcon>
                  {item === 'Messages' ? <MailIcon /> : ""}
                </ListItemIcon> */}

                <ListItemText primary={item} />
              </ListItemButton> : ''}

            </ListItem>
          ))};

          {/* //------------------------------------------------ */}

          <Divider />

          {/* //------------------------------------------------ */}

          {navItems2.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'left' }}>

                {item === 'Account' ? <ListItemButton sx={{ textAlign: 'center' }}
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("ACCOUNT BUTTON TEST");
                  }}>
                  <ListItemText primary={item} />
                </ListItemButton> : ''}

                {/* //------------------------------------------------ */}

                {item === 'Settings' ? <ListItemButton sx={{ textAlign: 'center' }}
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("SETTINGS BUTTON TEST");
                    // this.setState(true)
                  }}>
                  {/* { state ? StudentCard() : null } */}

                  <ListItemText primary={item} />
                </ListItemButton> : ''}

                {/* //------------------------------------------------ */}

                {item === 'Logout' ? <ListItemButton sx={{ textAlign: 'center' }}
                  component="a"
                  href='/login'
                  onClick={() => {
                    console.info("LOGOUT BUTTON TEST");
                  }}>
                  <ListItemText primary={item} />
                </ListItemButton> : ''}
              </ListItemButton>
            </ListItem>
          ))}

        </Drawer>
      </Toolbar>
      <hr style={{ marginLeft: "8px", marginRight: "8px" }} />

    </>
  );


}