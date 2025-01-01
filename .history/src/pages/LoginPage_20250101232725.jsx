import React from "react";
import LoginBtn from "../ui/LoginBtn";

function LoginPage() {
  return (
    <main
      className="w-full h-screen flex justify-center items-center flex-col font-mono gap-12"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/batthern.png')`,
      }}
    >
      <h1 className="lg:text-8xl uppercase font-bold text-4xl">
        Welcome to repo Viewer
      </h1>
      <LoginBtn />
    </main>
  );
}

export default LoginPage;
