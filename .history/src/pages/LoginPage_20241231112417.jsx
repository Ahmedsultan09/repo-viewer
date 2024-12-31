import React from "react";
import LoginBtn from "../ui/LoginBtn";

function LoginPage() {
  return (
    <main
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/skulls.png')`,
      }}
    >
      <LoginBtn />
    </main>
  );
}

export default LoginPage;