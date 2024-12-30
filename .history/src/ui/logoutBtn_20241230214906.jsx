import React from "react";

import useLogout from "../features/auth/useLogout";

function LogoutBtn() {
  const { logout } = useLogout();

  return (
    <button
      onClick={() => logout()}
      className="w-52 h-2 flex items-center justify-center rounded-xl border border-red-500 outline-none py-4 text-xl"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
