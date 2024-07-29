// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import Register from "./components/Register";
import Login from "./components/Login";
// import CourseCard from './components/CourseCard';
import QuizItem from "./pages/Quiz/quiz-item";
import QuizPage from "./pages/Quiz/QuizPage";
import UserCourseCatalog from "./components/UserCourseCatalog";

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
        <Link to="/quizz" style={{ margin: "15px" }}>
          Quizz
        </Link>
        <Link to="/edit-question" style={{ margin: "15px" }}>
          Edit Question
        </Link>
      </nav>
      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route
          path="/edit-question"
          element={<QuizItem mode="educator" item={2} />}
        />
        <Route path="/course-catalog" element={<UserCourseCatalog />} />
      </Routes>
    </div>
  );
}
