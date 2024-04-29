import { Route, Routes } from "react-router-dom";
import ForgotPassword from "@/pages/ForgotPassword";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";

export default function Router() {
  const token = useContext(AuthContext);
  console.log(token);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
