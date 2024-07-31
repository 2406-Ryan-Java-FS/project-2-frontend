import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./provider/AppProvider";
import UserCourseCatalog from "./pages/UserCourseCatalog/UserCourseCatalog";
import { PageProvider } from "./provider/PageProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </PageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
