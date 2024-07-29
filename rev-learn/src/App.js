import './App.css';
import CourseDetailView from './components/course-detail/course-detail-view'
import {Route,Routes} from 'react-router-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Register from './components/Register';
import Login from './components/Login';
// import CourseCard from './components/CourseCard';
import EducatorDashboard from './pages/EducatorDashboardComponents/educator-dashboard';
// import CourseCard from './components/CourseCard';
import QuizPage from './pages/Quiz/QuizPage';
import QuizItem from './pages/Quiz/quiz-item';

export default function App() {
  return (
    <div className="App">
        <nav id="navbar">
          <Link to="/" style={{margin: '15px'}}>Home</Link>{" ~ "}
          <Link to="/register" style={{margin: '15px'}}>Register</Link>
          <Link to="/login" style={{margin: '15px'}}>Login</Link>{" ~ "}
          <Link to='/quiz' style={{margin: '15px'}}>Quiz</Link>
          <Link to="/edit-question" style={{margin: '15px'}}>Edit Question</Link>
        </nav>
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/quiz' element={<QuizPage/>}/>
          <Route path='/edit-question' element={<QuizItem mode='student' item={2} />} />

           {/* TODO: course detail view/ need to add id in the param at the end */}
        <Route path='course/detail' element={<CourseDetailView/>} />
        </Routes>
      <EducatorDashboard />
    </div>
  );
}
