import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CookiesAccessProvider } from "./context/cookiesAccessProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesAccessProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </CookiesAccessProvider>
);
