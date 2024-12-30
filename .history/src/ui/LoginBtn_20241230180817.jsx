import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginBtn() {
  const { login } = useAuth();
  const navigate = useNavigate("/");
  return (
    <button
      className="text-red-500"
      onClick={() => login().then(() => navigate("/"))}
    >
      Login
    </button>
  );
}

export default LoginBtn;
