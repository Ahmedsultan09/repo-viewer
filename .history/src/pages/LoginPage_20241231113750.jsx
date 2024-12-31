import React from "react";
import LoginBtn from "../ui/LoginBtn";

function LoginPage() {
  return (
    <main
      className="w-full h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/batthern.png')`,
      }}
    >
      <h1 className="text-2xl uppercase">Welcome to repo Viewer</h1>
      <LoginBtn />
    </main>
  );
}

export default LoginPage;
