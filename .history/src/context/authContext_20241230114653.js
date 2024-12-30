import { createContext, useContext, useState } from "react";
import {
  signInWithPopup,
  auth,
  provider,
  GithubAuthProvider,
} from "../firebase/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // Save token for future use
      setToken(accessToken);
      setUser(result.user);
      setIsAuthenticated(true);
      console.log(result);
      console.log("Logged in user:", result.user);
      console.log("Access token:", accessToken);
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  function logout() {
    setToken("");
    setUser({});
    setIsAuthenticated(false);
  }

  const name = user.displayName;

  return (
    <AuthContext.Provider value={{ name, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
