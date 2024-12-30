import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LogoutBtn from "./logoutBtn";

function AppLayout() {
  return (
    <>
      <nav className="w-full h-20 flex justify-between px-7 items-center">
        <h1>Welcome, Test</h1>
        <LogoutBtn />
      </nav>
      <main className="w-full h-screen p-7 overflow-auto bg-gradient-to-r from-slate-700 to-sky-900">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
