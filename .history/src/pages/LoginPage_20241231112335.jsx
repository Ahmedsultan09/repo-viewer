import React from "react";
import LoginBtn from "../ui/LoginBtn";

function LoginPage() {
  return (
    <main
      className="w-full h-screen flex justify-center items-center bg-gradient-to-r  to-cyan-900bg-gradient-to-r from-slate-900 to-cyan-900"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/skulls.png')`,
      }}
    >
      <LoginBtn />
    </main>
  );
}

export default LoginPage;
