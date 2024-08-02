import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CourseDetailDescription from './course-detail-description';
import CourseDetailEducator from './course-detail-educator';
import CourseDetailContent from './course-detail-content';
import CourseDetailReview from './course-detail-review';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function CourseDetailTabs({course, educator}){
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="descripton" {...a11yProps(0)} />
          <Tab label="Instructor" {...a11yProps(1)} />
          <Tab label="Content" {...a11yProps(2)} />
          <Tab label="Review" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CourseDetailDescription description={course.description} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CourseDetailEducator educator={educator}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CourseDetailContent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CourseDetailReview courseId={course.courseId}/>
      </CustomTabPanel>
    </Box>
  );
}