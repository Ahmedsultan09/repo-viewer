import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AppLayout() {
  const { user } = useAuth();
  return (
    <>
      <nav>
        <h1>Welcome, {user.nameDisplay}</h1>
      </nav>
      <main className="w-full h-screen p-7 overflow-auto bg-gradient-to-r from-slate-700 to-sky-900">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
