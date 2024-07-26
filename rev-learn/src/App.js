import './App.css';
import {Route,Routes} from 'react-router-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Register from './components/Register';
import Login from './components/Login';
// import CourseCard from './components/CourseCard';
import EducatorDashboard from './pages/EducatorDashboardComponents/educator-dashboard';
// import CourseCard from './components/CourseCard';
import QuizzPage from './pages/Quizz/QuizzPage';
import QuizItem from './pages/Quizz/quizz-item';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav id="navbar">
          <Link to="/" style={{margin: '15px'}}>Home</Link>{" ~ "}
          <Link to="/register" style={{margin: '15px'}}>Register</Link>
          <Link to="/login" style={{margin: '15px'}}>Login</Link>{" ~ "}
          <Link to='/quizz' style={{margin: '15px'}}>Quizz</Link>
          <Link to="/edit-question" style={{margin: '15px'}}>Edit Question</Link>
        </nav>
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/quizz' element={<QuizzPage/>}/>
          <Route path='/edit-question' element={<QuizItem mode='educator' item={2} />} />
        </Routes>
      </BrowserRouter>
      <EducatorDashboard />
    </div>
  );
}
