import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import StudentCard from './StudentCard';
import { Toolbar } from '@mui/material';
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const navItems = ['Home', 'About', 'Contact Us'];
const navItems2 = ['Account', 'Settings', 'Logout']


export default function ResponsiveDrawer() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [state, setState] = useState(false);

  return (<>

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

          {item === 'About' ? <ListItemButton sx={{ textAlign: 'center' }}
            component="button"
            variant="body2"
            onClick={() => {
              console.info("ABOUT BUTTON TEST");
            }}>
            <ListItemText primary={item} />
          </ListItemButton> : ''}

          {/* //------------------------------------------------ */}

          {item === 'Contact Us' ? <ListItemButton sx={{ textAlign: 'center' }}
            component="button"
            variant="body2"
            onClick={() => {
              console.info("CONTACT BUTTON TEST");
            }}>
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
    
  </>
  );
}