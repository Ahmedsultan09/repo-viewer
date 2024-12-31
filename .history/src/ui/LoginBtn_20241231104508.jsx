import React from "react";
import useLogin from "../features/auth/useLogin";

function LoginBtn() {
  const { login } = useLogin();

  return (
    <button
      className="w-20 h-7 border-white text-white"
      onClick={() => login()}
    >
      Login
    </button>
  );
}

export default LoginBtn;
