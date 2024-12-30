import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CookiesAccessProvider } from "./context/CookiesAccessProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesAccessProvider>
    <App />
  </CookiesAccessProvider>
);
