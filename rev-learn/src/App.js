/// import logo from './logo.svg';
//This is a new push
//New comment from front-end
// Comment from Eugene
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Register from './components/Register';
import Login from './components/Login';

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
    </div>
  );
}