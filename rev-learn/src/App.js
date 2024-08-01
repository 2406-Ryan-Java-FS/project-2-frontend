import './App.css';
import {Route,Routes, useLocation} from 'react-router-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Register from './components/Register';
import Login from './components/Login';
import SideBar from './pages/individual-course-student/course-side-bar';
import CourseHome from './pages/individual-course-student/course-home';
import CourseQuizzes from './pages/individual-course-student/course-quizzes';
import CourseDiscussions from './pages/individual-course-student/course-discussions';
import CourseGrades from './pages/individual-course-student/course-grades';


const AppContent = () => {
  const location = useLocation();
  const showSideBar = location.pathname.startsWith('/courses');

  return (
    <div className="App" style={{ display: 'flex' }}>
      {showSideBar && <SideBar />}
      <div style={{ marginLeft: showSideBar ? '240px' : '0', padding: '20px', flexGrow: 1 }}>
        <nav id="navbar">
          <Link to="/">Home</Link>{" ~ "}
          <Link to="/login">Login</Link>{" ~ "}
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses/:courseId" element={<CourseHome />} />
          <Route path="/courses/:courseId/quizzes" element={<CourseQuizzes />} />
          <Route path="/courses/:courseId/discussions" element={<CourseDiscussions />} />
          <Route path="/courses/:courseId/grades" element={<CourseGrades />} />
        </Routes>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

