import React from "react";
import useLogin from "../features/auth/useLogin";
import ghLogo from "../assets/images/github-mark.png";

function LoginBtn() {
  const { login } = useLogin();

  return (
    <button
      className="w-auto h-16 px-12 border border-white font-mono uppercase flex items-center bg-white text-black rounded-xl"
      onClick={() => login()}
    >
      Login
      <img src={ghLogo} alt="github-logo" className="inline w-auto h-14" />
    </button>
  );
}

export default LoginBtn;
