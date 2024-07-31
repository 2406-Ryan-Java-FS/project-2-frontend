import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

import Signup from './components/Signup';
import Signin from './components/Signin';
import SignedInAs from './components/SignedInAs';

import CourseGrades from './pages/individual-course-student/course-grades';
import CourseHome from './pages/individual-course-student/course-home';
import CourseDiscussions from './pages/individual-course-student/course-discussions';
import CourseQuizzes from './pages/individual-course-student/course-quizzes';

import StudentProfile from './components/student-profile/StudentProfile';

import Payment from './components/Payment';

import QuizItem from "./pages/Quiz/quiz-item";
import QuizPage from "./pages/Quiz/QuizPage";

import UserCourseCatalog from "./components/UserCourseCatalog";
import SideBar from './pages/individual-course-student/course-side-bar';
import EducatorDashboard from './pages/EducatorDashboardComponents/educator-dashboard';
import ResponsiveDrawer from './components/student-profile/ResponsiveDrawer';
import ResponsiveDrawer2 from './components/student-profile/ResponsiveDrawer2';
import { useState } from 'react';
import { Divider } from '../node_modules/@mui/joy/index';

let globalStateSetter

export default function App() {

  let [x,setx]=useState(0)
  globalStateSetter=()=>{setx(x+1)}

  return (
    <div className="App">
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

        <ResponsiveDrawer2>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/educator">Educator</Link>
          <Divider />
          <Link to="/payments">Payment</Link>
          <Link to="/course-catalog">Catalog</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/edit-question">Edit&nbsp;Question</Link>
        </ResponsiveDrawer2>




        {/* Adding this gap to maybe help with merging, we'll see */}
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Signin/>}/>

          <Route path='/course-home' element={<CourseHome />} />
          <Route path='/course-grades' element={<CourseGrades />} />
          <Route path='/course-discussions' element={<CourseDiscussions />} />
          <Route path='/course-quizzes' element={<CourseQuizzes />} />
          <Route path="/courses/:courseId" element={<CourseHome />} />
          <Route path="/courses/:courseId/quizzes" element={<CourseQuizzes />} />
          <Route path="/course-catalog" element={<UserCourseCatalog />} />

          <Route path="/educator" element={<EducatorDashboard />} />


          <Route path='/profile' element={<StudentProfile />} />

          <Route path='/payments' element = {<Payment />}/>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/edit-question" element={<QuizItem mode="educator" item={2} />}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
