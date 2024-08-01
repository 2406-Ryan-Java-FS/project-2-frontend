import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { Toolbar } from '@mui/material';
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const navItems = ['Home', 'About', 'Contact Us'];
const navItems2 = ['Account', 'Settings', 'Logout']

/*
  Copied from ResponsiveDrawer into a new file so maybe git battles will be easier
*/
export default function ResponsiveDrawer2(props) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [state, setState] = useState(false);
  const navigateTrigger=useNavigate()

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
      PaperProps={{sx: { width: "20%" }}}>

      {/* Length {props.children.length} */}

      {
        //Looping over Links <Link to="/register">Register</Link>
      props.children.map((child)=>{

        if(child.type.render.name=="LinkWithRef")//if it's a <Link>
        {
          //console.log(`child=`,child)
          // console.log(`child.props.children=`,child.props.children)
          
          
          let theTextInsideTheLinkTag=child.props.children  //  "Register"
          let theToInsideTheLinkTag=child.props.to          //  /register
          // console.log(`theToInsideTheLinkTag=`,theToInsideTheLinkTag)

          function clickOnTheThing()
          {
            navigateTrigger(theToInsideTheLinkTag)
            setIsDrawerOpen(false)
          }

          return(<ListItem key={Math.random()} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={clickOnTheThing}>
              <ListItemText primary={theTextInsideTheLinkTag}/>
            </ListItemButton>
          </ListItem>)
        }
        else //otherwise return the child element
        {
          return child //to display <Divider/> for example
        }
      })}
    </Drawer>
    </Toolbar>
  </>
  );
}