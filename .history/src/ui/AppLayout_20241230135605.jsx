import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout({ children }) {
  return (
    <main className="w-full h-screen p-7 overflow-auto bg-cyan-900">
      <Outlet />
    </main>
  );
}

export default AppLayout;
