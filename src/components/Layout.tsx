import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Common Navbar */}
      {/* <nav className="w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 px-6 py-4 relative z-50">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">
            <span className="text-white">istok</span>
            <span className="text-orange-400">x</span>
            <span className="text-gray-400">.com</span>
          </div>
          <div className="text-sm text-gray-400">
            Don't have an account? 
            <a href="/login" className="text-white hover:text-orange-400 ml-1 transition-colors">
              Login
            </a>
          </div>
        </div>
      </nav> */}
      <Navbar />
      {/* Page Content */}
      <Outlet />
    </div>
  );
}
