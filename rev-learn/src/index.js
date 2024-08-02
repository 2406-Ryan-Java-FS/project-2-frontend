import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./provider/AppProvider";
import EducatorDashboard from "./pages/EducatorDashboardComponents/educator-dashboard";
import { EducatorDashboardProvider } from "./pages/EducatorDashboardComponents/educator-dashboard-context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <EducatorDashboardProvider>
          <EducatorDashboard />
        </EducatorDashboardProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
