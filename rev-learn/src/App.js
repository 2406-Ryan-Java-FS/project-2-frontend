import './App.css';
import {Route,Routes, Link} from 'react-router-dom';
import CourseHome from './pages/individual-course-student/course-home';
import CourseQuizzes from './pages/individual-course-student/course-quizzes';
import EducatorDashboard from './pages/EducatorDashboardComponents/educator-dashboard';
import QuizPage from './pages/Quiz/QuizPage';
import QuizItem from './pages/Quiz/quiz-item';
import CourseDetailView from './pages/course-detail/course-detail-view'
import Signup from './components/Signup';
import Signin from './components/Signin';
import UserCourseCatalog from "./pages/UserCourseCatalog/UserCourseCatalog";
import { useState } from 'react';
import { Divider } from '../node_modules/@mui/joy/index';
import Signout from './components/Signout';
import NavDrawer from './components/navigation/NavDrawer';
import uac from './controllers/userAccountController';
import AppProvider from './provider/AppProvider';
import { BrowserRouter, Navigate } from '../node_modules/react-router-dom/dist/index';
import CourseDiscussions from './pages/individual-course-student/course-discussions';
import CourseGrades from './pages/individual-course-student/course-grades';
import HomeComponent from './components/HomeComponent';
import StudentProfile from './components/student-profile/StudentProfile';
import Payment from './components/Payment';
import { EducatorDashboardProvider } from './pages/EducatorDashboardComponents/educator-dashboard-context';

export let globalStateSetter//causes full re-render of App
export let globalx;

export default function App() {

  let [x, setx] = useState(0)

  //WATCH OUT!!!! MUST change the value of a variable to cause re-render
  globalStateSetter = () => { setx(x + 1) }
  globalx=x
  
  return (
    <div className="App">

      <BrowserRouter>
      {/* Placing Provider here so useNaviagtion will not error */}
      <AppProvider>
      <EducatorDashboardProvider>

        <NavDrawer>
          {(uac.getLoggedInUser()==undefined?<Link to="/signin">Sign in</Link>:<Signout/>)}
          <Divider />
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/educator">Educator&nbsp;Dashboard</Link>
          <Divider />
          <Link to="/payments">Payment</Link>
          <Link to="/course-catalog">Catalog</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/edit-question">Edit&nbsp;Question</Link>
          <Link to="/student">Student&nbsp;Profile</Link>
        </NavDrawer>




        <Routes>
          <Route path="/s3" element={<Navigate to="/" />} />
          <Route path='/' element={<HomeComponent />} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>

          <Route path='/course-home' element={<CourseHome />} />
          <Route path='/course-grades' element={<CourseGrades />} />
          <Route path='/course-discussions' element={<CourseDiscussions />} />
          <Route path='/course-quizzes' element={<CourseQuizzes />} />
          <Route path="/courses/:courseId" element={<CourseHome />} />
          <Route path="/course/detail/:courseId" element={<CourseDetailView />}/>
          <Route path="/courses/:courseId/quizzes" element={<CourseQuizzes />} />
          <Route path="/course-catalog" element={<UserCourseCatalog />} />

          <Route path="/educator" element={<EducatorDashboard />} />

          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/edit-question" element={<QuizItem mode="educator" item={2} />} />

          <Route path="/student" element={<StudentProfile />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        </EducatorDashboardProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}
