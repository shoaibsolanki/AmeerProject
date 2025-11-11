import React from "react";
import type { Icon } from "lucide-react";

interface TabItem {
  label: string;
  icon: Icon;
}

interface TabsProps {
  tabs: TabItem[];
  currentTab: number;
  onTabChange: (idx: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, currentTab, onTabChange }) => (
  <nav
    style={{
      display: "flex",
      gap: "14px",
      padding: "22px 34px 9px 36px",
      borderBottom: "1.5px solid #23242a",
      background: "#181A20",
      position: "sticky",
      top: 0,
      zIndex: 5,
      alignItems: "center",
    }}
  >
    {tabs.map(({ label, icon: Icon }, idx) => (
      <button
        key={label}
        onClick={() => onTabChange(idx)}
        style={{
          background: currentTab === idx ? "#23272F" : "transparent",
          color: currentTab === idx ? "#fff" : "#c7c9cc",
          border: "none",
          borderRadius: "7px",
          padding: "8px 20px 8px 12px",
          fontWeight: 500,
          fontSize: "15px",
          boxShadow: currentTab === idx ? "0 2px 10px #2223" : "none",
          outline: "none",
          cursor: "pointer",
          transition: "background 0.18s, color 0.18s",
          display: "flex",
          alignItems: "center",
          gap: "9px"
        }}
      >
        <Icon size={18} />
        {label}
      </button>
    ))}
  </nav>
);

export default Tabs;
