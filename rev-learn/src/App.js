// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
// import CourseCard from './components/CourseCard';
import EducatorDashboard from './pages/EducatorDashboardComponents/educator-dashboard';
// import CourseCard from './components/CourseCard';
import QuizPage from './pages/Quiz/QuizPage';
import QuizItem from './pages/Quiz/quiz-item';
import CourseDetailView from './pages/course-detail/course-detail-view'
import Signup from './components/Signup';
import Signin from './components/Signin';
import SignedInAs from './components/SignedInAs';
import UserCourseCatalog from "./pages/UserCourseCatalog/UserCourseCatalog";
import QuizCreate from "./pages/Quiz/quiz-create";

export default function App() {
  return (
    <div className="App">
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
        {/* TODO: course detail view/ need to add id in the param at the end */}
        <Route path='course/detail' element={<CourseDetailView/>} />
      </Routes>
    </div>
  );
}
