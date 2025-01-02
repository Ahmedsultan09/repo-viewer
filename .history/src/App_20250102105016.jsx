import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import Home from "./features/Home";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import { CookiesAccessProvider } from "./context/CookiesAccessProvider";
import RepoItemPage from "./pages/RepoItemPage";
function App() {
  require("dotenv").config();

  return (
    <>
      <CookiesAccessProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/repo/:repoId" element={<RepoItemPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </CookiesAccessProvider>
    </>
  );
}

export default App;
