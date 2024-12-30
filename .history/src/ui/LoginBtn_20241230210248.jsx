import React from "react";
import useLogin from "../features/auth/useLogin";

function LoginBtn() {
  const { login } = useLogin();

  return (
    <button className="text-red-500" onClick={() => login()}>
      Login
    </button>
  );
}

export default LoginBtn;
