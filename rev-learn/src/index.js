import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./provider/AppProvider";
import QuizProvider from "./provider/QuizProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
