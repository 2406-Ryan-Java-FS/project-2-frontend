import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './pages/individual-course-student/course-side-bar';
import CourseHome from './pages/individual-course-student/course-home';
import CourseQuizzes from './pages/individual-course-student/course-quizzes';
import EducatorDashboard from './pages/EducatorDashboardComponents/educator-dashboard';
import QuizPage from './pages/Quiz/QuizPage';
import QuizItem from './pages/Quiz/quiz-item';
import CourseDetailView from './pages/course-detail/course-detail-view';
import Signup from './components/Signup';
import Signin from './components/Signin';
import UserCourseCatalog from './pages/UserCourseCatalog/UserCourseCatalog';
import CourseDiscussions from './pages/individual-course-student/course-discussions';
import CourseGrades from './pages/individual-course-student/course-grades';
import { EducatorDashboardProvider } from './pages/EducatorDashboardComponents/educator-dashboard-context';
import HomeComponent from './components/HomeComponent';
import NavBar from './components/navigation/NavBar';
import StudentProfile from './components/student-profile/StudentProfile';
import Payment from './components/Payment';
import QuizCreate from './pages/Quiz/quiz-create';

export default function App() {
  let [x, setx] = useState(0);

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/signin" element={<Signin setLoggedIn={setLoggedIn} />} />
        <Route path="/student" element={<StudentProfile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/edit-question" element={<QuizItem mode="educator" item={2} />} />
        <Route path="/quiz-create/:courseId" element={<QuizCreate />} />
        <Route path="/course-catalog" element={<UserCourseCatalog />} />
        <Route path="/course/detail/:courseId" element={<CourseDetailView />} />
        <Route path="/courses/:courseId" element={<CourseHome />} />
        <Route path="/courses/:courseId/quizzes" element={<CourseQuizzes />} />
        <Route path="/courses/:courseId/discussions" element={<CourseDiscussions />} />
        <Route path="/courses/:courseId/grades" element={<CourseGrades />} />
        <Route path="/educatordashboard" element={
          <EducatorDashboardProvider>
            <EducatorDashboard />
          </EducatorDashboardProvider>
        } />
        <Route path="/quiz/:quiz_id" element={<QuizPage />} />
      </Routes>
    </div>
  );
}
