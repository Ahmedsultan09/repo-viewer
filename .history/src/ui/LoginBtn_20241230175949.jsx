import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCookiesAccess } from "../context/CookiesAccessProvider";

function LoginBtn() {
  const { login } = useAuth();
  return (
    <button className="text-red-500" onClick={() => login()}>
      Login
    </button>
  );
}

export default LoginBtn;
