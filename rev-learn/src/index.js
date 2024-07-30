import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./provider/AppProvider";
import UserCourseCatalog from "./pages/UserCourseCatalog/UserCourseCatalog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        {/* <App /> */}
        <UserCourseCatalog />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
