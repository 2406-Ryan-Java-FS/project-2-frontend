import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';

const navItems = [
  'Home', 'Register', 'Login',
  'Profile', 'Payments', 'Courses',
  'Quizzes', 'Questions'
];
const navItems2 = ['Account', 'Settings', 'Logout']


export default function NavDrawer() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [state, setState] = useState(false);

  return (<>

    <AppBar variant="outlined" position="static">
      <Toolbar>
        <IconButton
          PaperProps={{
            sx: { color: 'white' }
          }}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => { setIsDrawerOpen(true) }
          } >

          <MenuIcon />

        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>

        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          // PaperProps allows us to resize the meu
          PaperProps={{
            sx: { width: "30%" }
          }}>


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

              {item === 'Register' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="a"
                href="/register"
                variant="body2"
                onClick={() => {
                  console.info("REGISTER BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Login' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="a"
                href='/login'
                variant="body2"
                onClick={() => {
                  console.info("LOGIN BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}


              {/* //------------------------------------------------ */}

              {item === 'Profile' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="a"
                href='/profile'
                onClick={() => {
                  console.info("PROFILE BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Payments' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="a"
                href='payments'
                variant="body2"
                onClick={() => {
                  console.info("PAYMENTS BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Courses' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="a"
                variant="/course-home"
                onClick={() => {
                  console.info("COURSES BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Quizzes' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="a"
                href='/quiz'
                onClick={() => {
                  console.info("QUIZZES BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}

              {item === 'Questions' ? <ListItemButton sx={{ textAlign: 'center' }}
                component="a"
                href='edit-question'
                variant="body2"
                onClick={() => {
                  console.info("QUESTIONS BUTTON TEST");
                }}>
                <ListItemText primary={item} />
              </ListItemButton> : ''}

              {/* //------------------------------------------------ */}


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
                  {/* {state ? <StudentCard /> : null} */}

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
    </AppBar>
  </>
  );
}