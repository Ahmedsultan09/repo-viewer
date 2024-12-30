import React from "react";

import useLogout from "../features/auth/useLogout";

function LogoutBtn() {
  const { logout } = useLogout();

  return (
    <button
      onClick={() => logout()}
      className="w-60 h-11 flex items-center justify-center rounded-xl border border-red-500 outline-none py-8 text-2xl"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
