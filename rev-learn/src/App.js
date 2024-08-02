import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import SideBar from "./pages/individual-course-student/course-side-bar";
import CourseHome from "./pages/individual-course-student/course-home";
import CourseQuizzes from "./pages/individual-course-student/course-quizzes";
import CourseDiscussions from "./pages/individual-course-student/course-discussions";
import CourseGrades from "./pages/individual-course-student/course-grades";
// import logo from './logo.svg';
// import CourseCard from './components/CourseCard';
// import CourseCard from './components/CourseCard';
import QuizPage from "./pages/Quiz/QuizPage";
import QuizItem from "./pages/Quiz/quiz-item";
import CourseDetailView from "./pages/course-detail/course-detail-view";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import UserCourseCatalog from "./pages/UserCourseCatalog/UserCourseCatalog";
import QuizCreate from "./pages/Quiz/quiz-create";
import { EducatorDashboardProvider } from "./pages/EducatorDashboardComponents/educator-dashboard-context";
import EducatorDashboard from "./pages/EducatorDashboardComponents/educator-dashboard";

export default function App() {
  const location = useLocation();
  const showSideBar = location.pathname.startsWith("/courses");

  return (
    <div className="App" style={{ display: "flex" }}>
      {showSideBar && <SideBar />}
      <div
        style={{
          marginLeft: showSideBar ? "240px" : "0",
          padding: "20px",
          flexGrow: 1,
        }}
      >
        <nav id="navbar">
          <Link to="/" style={{ margin: "15px" }}>
            Home
          </Link>
          {" ~ "}
          <Link to="/register" style={{ margin: "15px" }}>
            Register
          </Link>
          <Link to="/login" style={{ margin: "15px" }}>
            Login
          </Link>
          {" ~ "}
          <Link to="/quiz" style={{ margin: "15px" }}>
            Quiz
          </Link>
          <Link to="/edit-question" style={{ margin: "15px" }}>
            Edit Question
          </Link>
        <Link to="/create-quiz" style={{ margin: "15px" }}>
          Create New Quiz
        </Link>
        </nav>
        <Routes>
          <Route path="" element={<HomeComponent />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route
            path="/edit-question"
            element={<QuizItem mode="educator" item={2} />}
          />
        <Route path="/create-quiz" element={<QuizCreate />} />
        <Route path="/course-catalog" element={<UserCourseCatalog />} />
        <Route path='/course/detail/:courseId' element={<CourseDetailView/>} />
        
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
    </div>
  );
}
