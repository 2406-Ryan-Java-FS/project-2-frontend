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
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const drawerWidth = 300;

  const menuItems1 = [
    { text: 'Home', icon: <HomeIcon />, link:'/courses/:courseId' },
    { text: 'Syllabus', icon: <DescriptionIcon /> },
    { text: 'Grades', icon: <GradeIcon /> },
    { text: 'Discussions', icon: <ForumIcon /> },
  ];

  const menuItems2 = [
    { text: 'Assignments', icon: <AssignmentIcon /> },
    { text: 'Quizzes', icon: <QuizIcon />, link: '/courses/:courseId/quizzes' },
    { text: 'Announcements', icon: <AnnouncementIcon /> },
    { text: 'Resources', icon: <MenuBookIcon /> },
  ];

  const DrawerList= (
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
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {DrawerList}
    </Drawer>
  );
}