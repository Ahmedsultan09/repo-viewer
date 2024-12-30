import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  auth,
  provider,
  GithubAuthProvider,
} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["access_token"]);

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // Save token for future use
      setCookie("access_token", accessToken);
      setUser(result.user);
      console.log(result);
      console.log("Logged in user:", result.user);
      console.log("Access token:", accessToken);
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {
    if (cookie["access_token"] !== "") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [cookie]);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  function logout() {
    removeCookie("access_token");
    setUser({});
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
