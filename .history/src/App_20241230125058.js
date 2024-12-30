import { Route, Routes } from "react-router-dom";
import "./App.css";

import Repositories from "./components/Repositories";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home";

function App() {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
