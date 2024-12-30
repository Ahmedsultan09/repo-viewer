import { Route, Routes } from "react-router-dom";
import "./App.css";

import Repositories from "./components/Repositories";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home";
import AppLayout from "./ui/AppLayout";

function App() {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <>
      <Routes>
        <AppLayout>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </AppLayout>
      </Routes>
    </>
  );
}

export default App;
