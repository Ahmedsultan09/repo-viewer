import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";
require("dotenv").config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
