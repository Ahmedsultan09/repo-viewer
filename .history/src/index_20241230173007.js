import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CookiesAccessProvider } from "./context/CookiesAccessProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CookiesAccessProvider>
      <App />
    </CookiesAccessProvider>
  </AuthProvider>
);
