import { useNavigate } from "react-router-dom";
import { useCookiesAccess } from "../../context/CookiesAccessProvider";

function useLogout() {
  const { removeCookie } = useCookiesAccess();
  const navigate = useNavigate();

  function logout() {
    removeCookie("access_token");
    navigate("/login");
  }
  return { logout };
}

export default useLogout;
