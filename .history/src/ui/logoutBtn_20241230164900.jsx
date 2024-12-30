import React from "react";
import { useAuth } from "../context/AuthContext";

function LogoutBtn() {
  const { logout } = useAuth();
  return <button onClick={() => logout()}>Logout</button>;
}

export default LogoutBtn;
