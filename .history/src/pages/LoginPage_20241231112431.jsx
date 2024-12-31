import React from "react";
import LoginBtn from "../ui/LoginBtn";

function LoginPage() {
  return (
    <main
      className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-500 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/skulls.png')`,
      }}
    >
      <LoginBtn />
    </main>
  );
}

export default LoginPage;
