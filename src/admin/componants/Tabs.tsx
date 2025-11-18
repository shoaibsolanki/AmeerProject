import type { LucideIcon } from "lucide-react";
import React from "react";

interface TabItem {
  label: string;
  icon: LucideIcon;
}

interface TabsProps {
  tabs: TabItem[];
  currentTab: number;
  onTabChange: (idx: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, currentTab, onTabChange }) => (
  <nav className="flex px-5">
    <div className="flex gap-3 px-8 py-1 rounded-2xl border-b border-[#23242a] bg-[#1A1A1A] sticky top-0 z-10 items-center max-w-[950px]">
      {tabs.map(({ label, icon: Icon }, idx) => (
        <button
          key={label}
          onClick={() => onTabChange(idx)}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-medium transition-all duration-200 
          ${
            currentTab === idx
              ? "bg-[#0A0A0A] text-white shadow-[0_2px_8px_#1a1a1a]"
              : "text-[#c7c9cc] hover:text-white hover:bg-[#1d1f25]"
          }`}
        >
          <Icon size={18} className="shrink-0" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  </nav>
);

export default Tabs;
