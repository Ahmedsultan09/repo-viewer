import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "./Spinner";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  if (isAuthenticated) return children;

  return (
    <div className="flex h-[100dvh] items-center justify-center bg-gray-50">
      <Spinner />
    </div>
  );
}

export default ProtectedRoute;
