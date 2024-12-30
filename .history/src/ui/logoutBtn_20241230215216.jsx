import React from "react";

import useLogout from "../features/auth/useLogout";

function LogoutBtn() {
  const { logout } = useLogout();

  return (
    <button
      onClick={() => logout()}
      className="w-32 h-2 flex items-center justify-center rounded-xl outline-none py-4 text-xl bg-black text-white"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
