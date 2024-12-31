import React from "react";
import useLogin from "../features/auth/useLogin";

function LoginBtn() {
  const { login } = useLogin();

  return (
    <button
      className="w-auto h-7 px-12 border border-white text-white"
      onClick={() => login()}
    >
      Login
    </button>
  );
}

export default LoginBtn;
