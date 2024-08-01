import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Signup from './components/Signup';
import Signin from './components/Signin';

import CourseGrades from './pages/individual-course-student/course-grades';
import CourseHome from './pages/individual-course-student/course-home';
import CourseDiscussions from './pages/individual-course-student/course-discussions';
import CourseQuizzes from './pages/individual-course-student/course-quizzes';

import StudentProfile from './components/student-profile/StudentProfile';

import Payment from './components/Payment';

import QuizItem from "./pages/Quiz/quiz-item";
import QuizPage from "./pages/Quiz/QuizPage";

import UserCourseCatalog from "./components/UserCourseCatalog";
import EducatorDashboard from './pages/EducatorDashboardComponents/educator-dashboard';
import { useState } from 'react';
import { Divider } from '../node_modules/@mui/joy/index';
import Signout from './components/Signout';
import NavDrawer from './components/navigation/NavDrawer';
import HomeComponent from './components/HomeComponent';
import uac from './controllers/userAccountController';

export let globalStateSetter//causes full re-render of App

export default function App() {

  let [x, setx] = useState(0)
  globalStateSetter = () => { setx(x + 1) }

  return (
    <div className="App">
      {/* Added new Nav Bar and removed Top Test Navigation */}
      {/* {<HomeComponent />} */}

      <BrowserRouter>
        {/* This was used to navigate through course related components */}
        {/* <SideBar /> */}

        {/* <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/register">Register</Link>{" "}
          <Link to="/profile">Profile</Link>{" "}
          <Link to="/educator">Educator</Link>{" "}
          <Link to="/payments">Payment</Link>{" "}
          <Link to="/course-catalog">Catalog</Link>{" "}
          <Link to="/quiz">Quiz</Link>{" "}
          <Link to="/edit-question">Edit&nbsp;Question</Link>{" "}
          <SignedInAs/>
        </nav> */}

        <NavDrawer>
          {(uac.loggedInUser==undefined?<Link to="/signin">Sign in</Link>:<Signout/>)}
          <Divider />
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/educator">Educator</Link>
          <Divider />
          <Link to="/payments">Payment</Link>
          <Link to="/course-catalog">Catalog</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/edit-question">Edit&nbsp;Question</Link>
          <Link to="/login">Logout</Link>
        </NavDrawer>




        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>

          <Route path='/course-home' element={<CourseHome />} />
          <Route path='/course-grades' element={<CourseGrades />} />
          <Route path='/course-discussions' element={<CourseDiscussions />} />
          <Route path='/course-quizzes' element={<CourseQuizzes />} />
          <Route path="/courses/:courseId" element={<CourseHome />} />
          <Route path="/courses/:courseId/quizzes" element={<CourseQuizzes />} />
          <Route path="/course-catalog" element={<UserCourseCatalog />} />

          <Route path="/educator" element={<EducatorDashboard />} />


          <Route path='/profile' element={<StudentProfile />} />

          <Route path='/payments' element={<Payment />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/edit-question" element={<QuizItem mode="educator" item={2} />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}
