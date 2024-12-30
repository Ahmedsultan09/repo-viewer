import React from "react";
import { useAuth } from "../context/AuthContext";

function LogoutBtn() {
  const { logout } = useAuth();
  return (
    <button
      onClick={() => logout()}
      className="w-20 h-14 rounded-xl border-red-500 outline-none py-8 text-2xl"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
