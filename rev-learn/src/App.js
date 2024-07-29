/// import logo from './logo.svg';
//I'm removing al comments
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Register from './components/Register';
import Login from './components/Login';
import CourseHome from './pages/individual-course-student/course-home';
import CourseQuizzes from './pages/individual-course-student/course-quizzes';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav id="navbar">
          <Link to="/">Home</Link>{" ~ "}
          <Link to="/login">Login</Link>{" ~ "}
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/courses/:courseId" element={<CourseHome />} />
          <Route path="/courses/:courseId/quizzes" element={<CourseQuizzes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}