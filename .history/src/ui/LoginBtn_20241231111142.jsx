import React from "react";
import useLogin from "../features/auth/useLogin";
import ghLogo from "../assets/images/github-mark.png";

function LoginBtn() {
  const { login } = useLogin();

  return (
    <button
      className="w-96 h-16 px-12 border border-white font-mono uppercase flex items-center justify-between bg-white text-black rounded-xl cursor-pointer"
      onClick={() => login()}
    >
      <p className="text-2xl">Login</p>
      <img src={ghLogo} alt="github-logo" className="inline w-auto h-14" />
    </button>
  );
}

export default LoginBtn;