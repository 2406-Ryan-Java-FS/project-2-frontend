import './App.css';
import {Route,Routes} from 'react-router-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Register from './components/Register';
import Login from './components/Login';
// import CourseCard from './components/CourseCard';
import EducatorDashboard from './components/EducatorDashboardComponents/educator-dashboard';

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
        </Routes>
      </BrowserRouter>
      <EducatorDashboard />
    </div>
  );
}