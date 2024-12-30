import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  auth,
  provider,
  GithubAuthProvider,
} from "../../firebase/firebase";
import { useCookiesAccess } from "../../context/CookiesAccessProvider";

function useLogin() {
  const { setCookie } = useCookiesAccess();
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
  return { login };
}

export default useLogin;
