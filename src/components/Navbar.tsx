import React, { useState } from "react";
import {
  ChevronDown,
  Bell,
  Home,
  User,
  Box,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/Auth";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { products } = useCart();
  const { profile } = useAuth();

  // Change background color based on path
  const getBgColor = () => {
    if (location.pathname.startsWith("/dashboard")) return "bg-gray-900/90";
    if (location.pathname.startsWith("/products")) return "bg-zinc-900/90";
    if (location.pathname.startsWith("/announcements"))
      return "bg-neutral-900/90";
    if (location.pathname.startsWith("/settings")) return "bg-black/90";
    return "bg-black/90";
  };

  const navLinks = [
    {
      title: "Dashboard",
      to: "/",
      icon: <Home className="w-4 h-4" />,
      active: location.pathname === "/",
    },
    {
      title: "Announcement",
      to: "/announcements",
      icon: <Bell className="w-4 h-4 text-orange-400" />,
      active: location.pathname.startsWith("/announcements"),
    },
    {
      title: "Products",
      to: "/products",
      icon: <Box className="w-4 h-4" />,
      active: location.pathname.startsWith("/products"),
    },
    {
      title: "Cart",
      to: "/checkout",
      icon: (
        <div className="relative">
          <ShoppingBag className="w-4 h-4" />
          {products?.length > 0 && (
            <span
              aria-hidden="true"
              className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-blue-600 rounded-full"
            >
              {products?.length}
            </span>
          )}
        </div>
      ),
      active: location.pathname.startsWith("/checkout"),
    },
  ];

  return (
    <nav
      className={`w-full ${getBgColor()} backdrop-blur-sm border-b border-gray-800 px-6 py-4 relative z-50 transition-colors duration-500`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-semibold tracking-tight"
        >
          <span className="text-white">istok</span>
          <span className="text-orange-400 font-bold">x</span>
          <span className="text-gray-400">.com</span>
        </div>

        {/* Center Nav Links: Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium ${
                link.active
                  ? "bg-gray-900 text-white"
                  : "hover:text-orange-400 transition-colors"
              }`}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </div>

        {/* User Menu: Desktop */}
        <div
          onClick={() => navigate("/profile")}
          className="hidden md:flex items-center gap-2 text-gray-200 cursor-pointer"
        >
          <User className="w-5 h-5" />
          <span>{profile?.name}</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-80 backdrop-blur-sm flex flex-col">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
            <div className="text-2xl font-semibold tracking-tight">
              <span className="text-white">istok</span>
              <span className="text-orange-400 font-bold">x</span>
              <span className="text-gray-400">.com</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gray-300"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex flex-col px-6 py-4 space-y-5 text-lg bg-[#0D0D0D]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-2 py-2 rounded-lg font-medium ${
                  link.active
                    ? "bg-gray-900 text-white"
                    : "hover:text-orange-400 transition-colors text-gray-300"
                }`}
              >
                {link.icon}
                {link.title}
              </Link>
            ))}
            <div
              onClick={() => {
                setMobileOpen(false);
                navigate("/profile");
              }}
              className="flex items-center gap-2 text-gray-200 cursor-pointer px-2 py-2 rounded-lg hover:text-orange-400 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>{profile?.name}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
