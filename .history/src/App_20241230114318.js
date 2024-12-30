import { useState } from "react";
import "./App.css";
import {
  signInWithPopup,
  auth,
  provider,
  GithubAuthProvider,
} from "./firebase/firebase";
import Repositories from "./components/Repositories";
import { AuthProvider, useAuth } from "./context/authContext";

function App() {
  const { name, login, logout, isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <button onClick={login}>Login</button>
        </header>
        <Repositories />
      </div>
    </AuthProvider>
  );
}

export default App;
