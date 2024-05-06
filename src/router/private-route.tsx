import { useAuth } from "@/contexts/auth";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { token } = useAuth();

  if (token == null) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
