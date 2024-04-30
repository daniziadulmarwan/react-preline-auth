import { Navigate, Outlet } from "react-router-dom";

function ResetPasswordRoute() {
  const existedEmail = localStorage.getItem("existedEmail");

  if (!existedEmail) {
    return <Navigate to={"/forgot-password"} />;
  }

  return <Outlet />;
}

export default ResetPasswordRoute;
