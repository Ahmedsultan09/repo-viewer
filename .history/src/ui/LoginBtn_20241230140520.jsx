import React from "react";
import { useAuth } from "../context/AuthContext";

function LoginBtn() {
  const { login } = useAuth();
  return (
    <button className="text-red-500" onClick={() => login()}>
      Login
    </button>
  );
}

export default LoginBtn;
