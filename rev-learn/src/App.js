import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}