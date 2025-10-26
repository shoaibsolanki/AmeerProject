import { ChevronDown, Bell, Home, User, Box } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Change background color based on path
  const getBgColor = () => {
    if (location.pathname.startsWith("/dashboard")) return "bg-gray-900/90";
    if (location.pathname.startsWith("/products")) return "bg-zinc-900/90";
    if (location.pathname.startsWith("/announcements"))
      return "bg-neutral-900/90";
    if (location.pathname.startsWith("/settings")) return "bg-black/90";
    return "bg-black/90"; // default
  };

  return (
    <nav
      className={`w-full ${getBgColor()} backdrop-blur-sm border-b border-gray-800 px-6 py-4 relative z-50 transition-colors duration-500`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-tight">
          <span className="text-white">istok</span>
          <span className="text-orange-400 font-bold">x</span>
          <span className="text-gray-400">.com</span>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          <Link
            to="/"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium ${
              location.pathname === "/"
                ? "bg-gray-900 text-white"
                : "hover:text-orange-400 transition-colors"
            }`}
          >
            <Home className="w-4 h-4" />
            Dashboard
          </Link>

          <Link
            to="/announcements"
            className={`flex items-center gap-2 ${
              location.pathname.startsWith("/announcements")
                ? "text-orange-400"
                : "hover:text-orange-400"
            } transition-colors`}
          >
            <Bell className="w-4 h-4 text-orange-400" />
            Announcement
          </Link>

          <Link
            to="/products"
            className={`flex items-center gap-2 ${
              location.pathname.startsWith("/products")
                ? "text-orange-400"
                : "hover:text-orange-400"
            } transition-colors`}
          >
            <Box className="w-4 h-4" />
            Products
          </Link>

          <div className="flex items-center gap-1 hover:text-orange-400 cursor-pointer transition-colors">
            More <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Right User Menu */}
        <div className="flex items-center gap-2 text-gray-200 cursor-pointer">
          <User className="w-5 h-5" />
          <span>Natashia Bunny</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
}
