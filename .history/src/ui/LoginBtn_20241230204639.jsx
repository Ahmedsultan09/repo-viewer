import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  signInWithPopup,
  auth,
  provider,
  GithubAuthProvider,
} from "../firebase/firebase";

function LoginBtn() {
  const [setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate("/");

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      setCookie("access_token", accessToken);
      navigate("/");
      console.log(result);
      console.log("Logged in user:", result.user);
      console.log("Access token:", accessToken);
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <button className="text-red-500" onClick={() => login()}>
      Login
    </button>
  );
}

export default LoginBtn;
