import React from "react";
import {
  BadgeDollarSign,
  ShoppingCart,
  RefreshCcw,
  RotateCcw,
  CheckCircle,
  ArrowRightLeft,
  XCircle,
  Users,
  Package,
  ChevronRightSquare,
  CircleCheck,
} from "lucide-react";

const statCards = [
  {
    label: "Active Products",
    value: 8,
    icon: <Package className="text-yellow-400" size={22} />,
    circle: "bg-yellow-900/60",
    border: "border-yellow-800",
  },
  {
    label: "Access Requests",
    value: 12,
    icon: <ShoppingCart className="text-purple-400" size={22} />,
    circle: "bg-purple-900/60",
    border: "border-purple-800",
  },
  {
    label: "ID Changes",
    value: 5,
    icon: <RefreshCcw className="text-blue-400" size={22} />,
    circle: "bg-blue-900/60",
    border: "border-blue-800",
  },
  {
    label: "Total Active Users",
    value: 847,
    icon: <CircleCheck   className="text-green-400" size={22} />,
    circle: "bg-green-900/60",
    border: "border-green-800",
  },
];

const actions = [
  { label: "Create Product", highlight: true },
  { label: "Process Access Request" },
  { label: "Review ID Change" },
  { label: "Create Announcement" },
];

const activities = [
  {
    initials: "JD",
    name: "John Doe",
    info: "Access granted for Premium Tier",
    icon: <CheckCircle size={16} className="text-green-400 inline ml-1 align-middle" />,
    detail: "text-green-400",
    time: "5 minutes ago",
  },
  {
    initials: "SS",
    name: "Sarah Smith",
    info: "TradingView ID change approved",
    icon: <ArrowRightLeft size={16} className="text-blue-400 inline ml-1 align-middle" />,
    detail: "text-blue-400",
    time: "12 minutes ago",
  },
  {
    initials: "MJ",
    name: "Michael Johnson",
    info: "New purchase - Enterprise Tier",
    icon: <ShoppingCart size={16} className="text-purple-400 inline ml-1 align-middle" />,
    detail: "text-purple-400",
    time: "1 hour ago",
  },
  {
    initials: "EW",
    name: "Emma Wilson",
    info: "New purchase - Enterprise Tier",
    icon: <XCircle size={16} className="text-red-400 inline ml-1 align-middle" />,
    detail: "text-red-400",
    time: "2 hours ago",
  },
];

export default function DashboardUI() {
  return (
    <div className="bg-black min-h-screen text-gray-200 p-6 font-sans">
      {/* Top Stats Cards */}
      <div className="flex gap-4 mt-3">
        {statCards.map((card) => (
          <div
            key={card.label}
            className={`relative flex flex-col justify-between bg-[#18181c] rounded-lg px-6 py-5 w-56 h-[88px] border ${card.border} shadow-md hover:shadow-lg transition-shadow`}
          >
            <span className={`absolute top-4 right-4 rounded-full p-2 ${card.circle}`}>
              {card.icon}
            </span>
            <div className="flex flex-col justify-center h-full">
              <span className="text-xs text-gray-400 mb-1">{card.label}</span>
              <span className="text-lg font-semibold text-gray-200">{card.value}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="mb-7 mt-7 p-6 bg-[#0A0A0A] rounded-lg border border-gray-800 shadow-md">
        <div className="text-sm text-gray-400 mb-2 font-medium pl-1">Quick Actions</div>
        <div className="flex gap-2">
          {actions.map((act, idx) => (
            <button
              key={act.label}
              className={`px-4 py-2 rounded font-semibold text-sm border border-gray-700
                ${act.highlight ? "bg-blue-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}
                transition-colors`}
            >
              {act.label}
            </button>
          ))}
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-[#0A0A0A] rounded-lg p-4 shadow border border-gray-800">
        <div className="text-sm text-gray-400 mb-3 font-medium">Recent Activity</div>
        <ul>
          {activities.map((a, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between py-2 border-b border-gray-800 last:border-none"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 text-gray-200 rounded-full w-8 h-8 flex items-center justify-center font-bold text-md">
                  {a.initials}
                </div>
                <div>
                  <span className="font-semibold">{a.name}</span>
                  <span className={`block text-xs ${a.detail}`}>
                    {a.info} {a.icon}
                  </span>
                </div>
              </div>
              <span className="text-xs text-gray-500">{a.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
