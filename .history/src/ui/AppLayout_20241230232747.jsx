import React from "react";
import { Outlet } from "react-router-dom";
import LogoutBtn from "./logoutBtn";

function AppLayout() {
  const displayName = window.localStorage.getItem("name");
  return (
    <main className="w-full h-screen p-7 overflow-auto bg-white font-mono">
      <nav className="w-full h-20 flex justify-between px-7 items-center text-black">
        <h1 className="text-2xl font-bold">
          Welcome, {displayName}{" "}
          <span>
            {" "}
            <img
              className="w-7 h-7 rounded-full inline"
              src={info.avatar_url}
              alt="avatar"
            />
          </span>
        </h1>
        <LogoutBtn />
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;