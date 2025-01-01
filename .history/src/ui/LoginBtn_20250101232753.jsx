import React from "react";
import useLogin from "../features/auth/useLogin";
import ghLogo from "../assets/images/github-mark-white.svg";

function LoginBtn() {
  const { login } = useLogin();

  return (
    <button
      className="lg:w-96 w-56 h-16 px-12 font-mono uppercase flex py-3 border items-center justify-between bg-black text-white rounded-xl cursor-pointer box-content hover:outline-none hover:border hover:border-white hover:filter hover:invert hover:bg-transparent transition-colors duration-300"
      onClick={() => login()}
    >
      <p className="text-xl">
        <strong>Login</strong> Via{" "}
      </p>
      <img src={ghLogo} alt="github-logo" className="inline w-auto h-14" />
    </button>
  );
}

export default LoginBtn;