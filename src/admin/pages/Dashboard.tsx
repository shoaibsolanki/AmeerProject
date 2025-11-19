import React, { useState } from "react";
import {
  Home,
  ShoppingCart,
  KeyRound,
  UserSquare,
  Megaphone,
} from "lucide-react";

// import NoRequests from '../componants/NoRequests';
import Tabs from "../componants/Tabs";
import Announcements from "./Announcements";
import IDChanges from "./IDChanges";
import DashboardLayout from "../DashboardLayout";
import ProductManagement from "./ProductManagement";

const tabLabels = [
  { label: "Dashboard", icon: Home },
  { label: "Products", icon: ShoppingCart },
  { label: "Access Requests", icon: KeyRound },
  { label: "ID Changes", icon: UserSquare },
  { label: "Announcements", icon: Megaphone },
];

const tabContent = [
 
  <DashboardLayout key="dashboard" />,
  <ProductManagement key="products" />,



  <div
    key="access"
    style={{ color: "#c7c9cc", fontSize: 18, textAlign: "center", padding: 60 }}
  >
    Access Requests Content
  </div>,
  <IDChanges key="idchange" />,
  <Announcements key="announce" />,
];

const Dashboard: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div style={{ minHeight: "100vh", width: "100vw" }}>
      <div
        className="flex gap-5 flex-col"
        style={{
          margin: "38px auto 0 auto",
          minHeight: "390px",
          maxWidth: "1050px",
          width: "96%",
          padding: "0 0 32px 0",
        }}
      >
        <Tabs
          tabs={tabLabels}
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
        {tabContent[currentTab]}
      </div>
    </div>
  );
};

export default Dashboard;
