import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import GradeIcon from '@mui/icons-material/Grade';
import ForumIcon from '@mui/icons-material/Forum';
import QuizIcon from '@mui/icons-material/Quiz';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import { IconButton } from '../../../node_modules/@mui/joy/index';
import { Menu } from '@mui/icons-material';
import { Typography } from '../../../node_modules/@mui/joy/index';
import { useState } from 'react';
import { Toolbar } from '../../../node_modules/@mui/material/index';
import { AddCard } from '../../../node_modules/@mui/icons-material/index';

export default function SideBar() {
  const drawerWidth = 245;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [state, setState] = useState(false);

  const menuItems1 = [
    { text: 'Home', icon: <HomeIcon />, link: '/courses/:courseId' },
    { text: 'Syllabus', icon: <DescriptionIcon /> },
    { text: 'Grades', icon: <GradeIcon />, link: '/courses/:courseId/grades' },
    { text: 'Discussions', icon: <ForumIcon />, link: '/courses/:courseId/discussions' },
  ];

  const menuItems2 = [
    { text: 'Quizzes', icon: <QuizIcon />, link: '/courses/:courseId/quizzes' },
    { text: 'Announcements', icon: <AnnouncementIcon /> },
    { text: 'Resources', icon: <MenuBookIcon /> },
    { text: 'Payment Method', icon: <AddCard />, link: '/payment'}
  ];

  const DrawerList = (
    
    <Box sx={{ width: drawerWidth }} role="presentation">
      <List>
        {menuItems1.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menuItems2.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (

    <Toolbar sx={{
      flexGrow: 1, backgroundColor: '#F36928',
      color: 'black', fontSize: '32px',
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

        <Menu />

      </IconButton>

      <Typography
        sx={{
          flexGrow: 1, backgroundColor: '#F36928',
          borderRadius: '25px', color: 'black', fontSize: '32px'
        }}>
        Student Profile
      </Typography>

      <Drawer
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        // variant="permanent"
        // anchor="left"
      >
        {DrawerList}
      </Drawer>
    </Toolbar>
  );
}