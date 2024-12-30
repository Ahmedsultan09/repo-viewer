import React from "react";
import { Outlet } from "react-router-dom";
import LogoutBtn from "./logoutBtn";

function AppLayout() {
  const displayName = window.localStorage.getItem("name");
  return (
    <main className="w-full h-screen p-7 overflow-auto bg-gradient-to-b from-gray-900 to-gray-900">
      <nav className="w-full h-20 flex justify-between px-7 items-center text-black">
        <h1>Welcome, {displayName}</h1>
        <LogoutBtn />
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
