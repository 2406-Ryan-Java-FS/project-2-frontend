import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Register from './components/Register';
import Login from './components/Login';
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
          <Link to="/">Home</Link>{" ~ "}
          <Link to="/login">Login</Link>{" ~ "}
          <Link to="/register">Register</Link>{" ~ "}
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
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