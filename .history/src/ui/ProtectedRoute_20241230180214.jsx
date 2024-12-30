import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "./Spinner";
import { useCookiesAccess } from "../context/CookiesAccessProvider";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { getCookie } = useCookiesAccess();
  const isAuthenticated = getCookie("access_token");

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  useEffect(() => console.log(isAuthenticated), [isAuthenticated]);
  if (isAuthenticated) return children;

  return (
    <div className="flex h-[100dvh] items-center justify-center bg-gray-50">
      <Spinner />
    </div>
  );
}

export default ProtectedRoute;