import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Signup from './components/Signup';
import Signin from './components/Signin';
import SignedInAs from './components/SignedInAs';
import CourseGrades from './components/individual-course-student/course-grades';
import CourseHome from './components/individual-course-student/course-home';
import CourseDiscussions from './components/individual-course-student/course-discussions';
import CourseQuizzes from './components/individual-course-student/course-quizzes';
import StudentProfile from './components/student-profile/StudentProfile';
import SideBar from './pages/individual-course-student/course-side-bar';
import Payment from './components/Payment';
import QuizItem from "./pages/Quiz/quiz-item";
import QuizPage from "./pages/Quiz/QuizPage";
import UserCourseCatalog from "./components/UserCourseCatalog";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar />
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/payments">Payment</Link>
          <Link to="/quizz" style={{ margin: "15px" }}>Quizz</Link>
          <Link to="/edit-question" style={{ margin: "15px" }}>Edit Question</Link>
          <SignedInAs/>
        </nav>






        {/* Adding this gap to maybe help with merging, we'll see */}
        <Routes>
          <Route path='' element={<HomeComponent />} />
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/course-grades' element={<CourseGrades />} />
          <Route path='/course-home' element={<CourseHome />} />
          <Route path='/course-discussions' element={<CourseDiscussions />} />
          <Route path='/course-quizzes' element={<CourseQuizzes />} />
          <Route path='/profile' element={<StudentProfile />} />
          <Route path="/courses/:courseId" element={<CourseHome />} />
          <Route path="/courses/:courseId/quizzes" element={<CourseQuizzes />} />
          <Route path='/payments' element = {<Payment />}/>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/edit-question" element={<QuizItem mode="educator" item={2} />}/>
          <Route path="/course-catalog" element={<UserCourseCatalog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
