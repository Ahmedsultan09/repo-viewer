import React from "react";
import useLogin from "../features/auth/useLogin";
import ghLogo from "../assets/images/GitHub_Logo.png";

function LoginBtn() {
  const { login } = useLogin();

  return (
    <button
      className="w-auto h-7 px-12 border border-white text-white"
      onClick={() => login()}
    >
      Login
      <img src={ghLogo} alt="github-logo" />
    </button>
  );
}

export default LoginBtn;
