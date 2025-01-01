import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  auth,
  provider,
  GithubAuthProvider,
} from "../../firebase/firebase";
import { useCookiesAccess } from "../../context/CookiesAccessProvider";
import { useUserInfo } from "../../context/UserContext";
import { useEffect } from "react";

function useLogin() {
  const { setCookie } = useCookiesAccess();
  const navigate = useNavigate("/");
  const { setUser } = useUserInfo();

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      setCookie("access_token", accessToken);
      setUser(result.user);
      window.localStorage.setItem("name", result.user.displayName);
      window.localStorage.setItem("uid", result.user.providerData[0].uid);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return { login };
}

export default useLogin;