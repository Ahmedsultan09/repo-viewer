import React from "react";

import useLogout from "../features/auth/useLogout";

function LogoutBtn() {
  const { logout } = useLogout();

  return (
    <button
      onClick={() => logout()}
      className="w-32 h-2 flex items-center justify-center tracking-widest rounded-xl outline-none py-4 text-sm bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
