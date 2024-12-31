import React from "react";
import useLogin from "../features/auth/useLogin";
import ghLogo from "../assets/images/github-mark.png";

function LoginBtn() {
  const { login } = useLogin();

  return (
    <div className="h-16 px-12 border border-white font-mono uppercase flex items-center justify-between bg-white text-black rounded-xl">
      <button onClick={() => login()}>Login</button>
      <img src={ghLogo} alt="github-logo" className="inline w-auto h-14" />
    </div>
  );
}

export default LoginBtn;
