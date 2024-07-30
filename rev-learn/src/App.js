import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Signup from './components/Signup';
import Signin from './components/Signin';
import SignedInAs from './components/SignedInAs';
import CourseGrades from './components/individual-course-student/course-grades';
import CourseHome from './components/individual-course-student/course-home';
import CourseDiscussions from './components/individual-course-student/course-discussions';
import CourseQuizzes from './components/individual-course-student/course-quizzes';
import StudentProfile from './components/student-profile/StudentProfile';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <SignedInAs/>
        </nav>






        {/* Adding this gap to maybe help with merging, we'll see */}
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/course-grades' element={<CourseGrades />} />
          <Route path='/course-home' element={<CourseHome />} />
          <Route path='/course-discussions' element={<CourseDiscussions />} />
          <Route path='/course-quizzes' element={<CourseQuizzes />} />
          <Route path='/profile' element={<StudentProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}