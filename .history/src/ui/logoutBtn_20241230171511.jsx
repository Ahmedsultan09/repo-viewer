import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
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
