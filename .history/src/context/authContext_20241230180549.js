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
  const [cookie, setCookie, removeCookie] = useCookies(["access_token"]);

  const navigate = useNavigate();

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      setCookie("access_token", accessToken);
      navigate("/");
      setUser(result.user);
      console.log(result);
      console.log("Logged in user:", result.user);
      console.log("Access token:", accessToken);
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  function logout() {
    removeCookie("access_token");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
