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

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
