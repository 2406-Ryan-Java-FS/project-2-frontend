import './App.css';
import {Route,Routes, Link} from 'react-router-dom';
// import HomeComponent from './components/HomeComponent';
import SideBar from './pages/individual-course-student/course-side-bar';
import CourseHome from './pages/individual-course-student/course-home';
import CourseQuizzes from './pages/individual-course-student/course-quizzes';
// import logo from './logo.svg';
import EducatorDashboard from './pages/EducatorDashboardComponents/educator-dashboard';
// import CourseCard from './components/CourseCard';
import QuizPage from './pages/Quiz/QuizPage';
import QuizItem from './pages/Quiz/quiz-item';
import CourseDetailView from './pages/course-detail/course-detail-view'
import Signup from './components/Signup';
import Signin from './components/Signin';
import UserCourseCatalog from "./pages/UserCourseCatalog/UserCourseCatalog";
import { useState } from 'react';
import CourseDiscussions from './pages/individual-course-student/course-discussions';
import CourseGrades from './pages/individual-course-student/course-grades';
import { EducatorDashboardProvider } from './pages/EducatorDashboardComponents/educator-dashboard-context';
import HomeComponent from './components/HomeComponent';
import NavBar from './components/navigation/NavBar';

export default function App() {

  let [x, setx] = useState(0)
  // globalStateSetter = () => { setx(x + 1) }

  // const location = useLocation();
  // const showSideBar = location.pathname.startsWith("/courses");

  return (
    <div className="App">

      {<NavBar />}
      <SideBar />

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route
          path="/edit-question"
          element={<QuizItem mode="educator" item={2} />}
        />
        <Route path="/course-catalog" element={<UserCourseCatalog />} />
        {/* TODO: course detail view/ need to add id in the param at the end */}
        <Route
            path="/course/detail/:courseId"
            element={<CourseDetailView />}
          />
        <Route path="/courses/:courseId" element={<CourseHome />} />
          <Route
            path="/courses/:courseId/quizzes"
            element={<CourseQuizzes />}
          />
          <Route
            path="/courses/:courseId/discussions"
            element={<CourseDiscussions />}
          />
          <Route path="/courses/:courseId/grades" element={<CourseGrades />} />  
        <Route
            path="/educatordashboard"
            element={
              <EducatorDashboardProvider>
                <EducatorDashboard />
              </EducatorDashboardProvider>
            }
          />
          
      </Routes>
      </div>

  );
}
