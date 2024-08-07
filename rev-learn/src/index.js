import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./provider/AppProvider";
import QuizProvider from "./provider/QuizProvider";
import { EducatorDashboardProvider } from "./pages/EducatorDashboardComponents/educator-dashboard-context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <QuizProvider>
          <EducatorDashboardProvider>
          <App />
          </EducatorDashboardProvider>
        </QuizProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
