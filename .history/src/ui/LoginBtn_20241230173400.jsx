import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCookiesAccess } from "../context/CookiesAccessProvider";

function LoginBtn() {
  const { login } = useAuth();
  const { getCookie } = useCookiesAccess();
  const isAuthenticated = getCookie("access_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    <button className="text-red-500" onClick={() => login()}>
      Login
    </button>
  );
}

export default LoginBtn;
