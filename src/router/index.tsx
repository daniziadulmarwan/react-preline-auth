import { Route, Routes } from "react-router-dom";
import ForgotPassword from "@/pages/ForgotPassword";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import Dashboard from "@/pages/Dashboard";

import GuestRoute from "./guest-route";
import ResetPasswordRoute from "./reset-password-route";

export default function Router() {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route element={<ResetPasswordRoute />}>
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
