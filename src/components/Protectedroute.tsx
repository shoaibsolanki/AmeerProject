import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/Auth";
export default function ProtectedRoute() {
  const { user } = useAuth();

  const hasUserData =
    !!user && (typeof user === "object" ? Object.keys(user).length > 0 : true);

  if (!hasUserData) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
