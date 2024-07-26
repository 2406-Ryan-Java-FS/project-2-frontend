import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import CourseDetailView from './components/course-detail/course-detail-view'

function App() {
  return (
    <>
      <Routes>












        
        {/* TODO: course detail view/ need to add id in the param at the end */}
        <Route path='course/detail' element={<CourseDetailView/>} />

      </Routes>
    </>
  );
}

export default App;
