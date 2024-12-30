import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  auth,
  provider,
  GithubAuthProvider,
} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // Save token for future use
      setToken(accessToken);
      setUser(result.user);
      console.log(result);
      console.log("Logged in user:", result.user);
      console.log("Access token:", accessToken);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {
    if (token !== "") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  function logout() {
    setToken("");
    setUser({});
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
