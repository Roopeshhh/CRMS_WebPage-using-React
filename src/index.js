import React from "react";
import ReactDOM from "react-dom/client";
// import LoginPage from './login/login';
// import './index.css';
// import App from './App';
import App from "./App";
import { ThemeProvider } from "./theme/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
