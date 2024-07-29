import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Signup from './components/Signup';
import Signin from './components/Signin';
import SignedInAs from './components/SignedInAs';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <SignedInAs/>
        </nav>
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}