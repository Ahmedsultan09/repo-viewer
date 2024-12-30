import React from "react";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { logout } = useAuth();
  return (
    <main>
      <span>Home</span>
      <button onClick={() => logout()}>Logout</button>
    </main>
  );
}

export default Home;
