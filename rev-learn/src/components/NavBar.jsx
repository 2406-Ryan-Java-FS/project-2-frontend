import {useEffect, useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import "../styles/nav.css";

export default function NavBar(){

    const [user,setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        setUser(loggedInUser);
    
      }, []);

      function logout(){
        localStorage.removeItem('loggedInUser');
        setUser(null);
        if(localStorage.getItem('loogedInUser')){
            console.log("logout not working")
        }
      }

    return(
        <header>
            <nav id="navbar">
                <div id="nav-inner-box">
                    <div id="nav-left">
                        <NavLink className="nav-link" to="/">RevLearn</NavLink>
                        <NavLink  className="nav-link" to="/course-catalog">Courses</NavLink>
                        {user &&(user.role == "student"?
                        <NavLink className="nav-link">Student dashboard</NavLink> :<NavLink className="nav-link">Educator dashboard</NavLink>
                    )}
                    </div>
                    
                    

                    {!user && <div id="nav-right">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </div>}
                    {user&& (
                        <div className="loggedin-box">
                            <div className="usernameBadge">
                            Welcome! <span>{user.firstName}</span> 
                            </div>
                            <button 
                              onClick={logout}
                            className="grey-btn" id="logoutBtn"
                            >
                            Log out
                            </button>
                      </div>
                    )}
                   
                </div>
            </nav>
            {/* <nav id="navbar">
                <Link to="/" style={{ margin: "15px" }}>
                Home
                </Link>
                <Link to="/register" style={{ margin: "15px" }}>
                Register
                </Link>
                <Link to="/login" style={{ margin: "15px" }}>
                Login
                </Link>
                <Link to="/quiz" style={{ margin: "15px" }}>
                Quiz
                </Link>
                <Link to="/create-quiz" style={{ margin: "15px" }}>
                    Create New Quiz
                </Link>
            </nav> */}
        </header>
    )
}