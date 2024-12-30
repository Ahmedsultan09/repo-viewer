import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCookiesAccess } from "../context/CookiesAccessProvider";

function LogoutBtn() {
  const { removeCookie } = useCookiesAccess();
  function logout() {
    removeCookie("access_token");
  }
  const navigate = useNavigate();

  return (
    <button
      onClick={() => logout()}
      className="w-20 h-14 rounded-xl border border-red-500 outline-none py-8 text-2xl"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;