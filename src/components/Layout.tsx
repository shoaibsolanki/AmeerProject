import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Common Navbar */}
      <Navbar />
      {/* Page Content */}
      <Outlet />
    </div>
  );
}
