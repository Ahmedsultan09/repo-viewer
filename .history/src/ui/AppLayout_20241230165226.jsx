import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <nav></nav>
      <main className="w-full h-screen p-7 overflow-auto bg-gradient-to-r from-slate-700 to-sky-900">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
