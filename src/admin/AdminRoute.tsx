import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/Auth";

const AdminRoute: React.FC = () => {
  const { user } = useAuth();
  // const user = { isAdmin: true };
  // Check your user object structure for admin role
  if (!user || user.role != "Admin") {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
