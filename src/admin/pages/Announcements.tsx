import React from "react";

const announcements = [
  {
    id: 1,
    title: "New Premium Features Released",
    description: "Access advanced TradingView strategies and real-time alerts",
    createdAt: "10/20/2025",
    status: "Active",
    image: "/lableImage.png",
    buttons: ["Preview", "Edit", "Deactivate"],
  },
  {
    id: 2,
    title: "System Maintenance Scheduled",
    description: "We will be performing updates on October 30th from 2-4 AM EST",
    createdAt: "10/18/2025",
    status: "Draft",
    image: "/ImageWithFallback.png",
    buttons: ["Preview", "Edit", "Activate"],
  },
];

const Announcements: React.FC = () => (
  <div
    style={{
      background: "#181A20",
      borderRadius: 16,
      padding: "22px 28px 34px 28px",
      boxShadow: "0 2px 8px #10101080",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto"
    }}
  >
    <div style={{ fontWeight: 500, color: "#eee", fontSize: 16, marginBottom: 20 }}>
      Existing Announcements
    </div>
    <div style={{ textAlign: "right", marginBottom: "20px" }}>
      <button style={{
        background: "#2578F4",
        color: "#fff",
        fontWeight: 500,
        padding: "9px 20px",
        borderRadius: "8px",
        border: "none",
        fontSize: 14,
        cursor: "pointer",
        boxShadow: "0 1px 6px #2578F444"
      }} >
        + New Announcement
      </button>
    </div>
    {announcements.map(a => (
      <div key={a.id} style={{
        display: "flex",
        alignItems: "flex-start",
        background: "#23242a",
        borderRadius: 14,
        marginBottom: 16,
        boxShadow: "0 0px 8px #22222233",
        padding: "14px 16px"
      }}>
        <img src={a.image} alt="" style={{ width: 200, height: 156, borderRadius: 9, objectFit: "cover", marginRight: 18 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, fontSize: 15, color: "#fff", marginBottom: 4 }}>
            {a.title}
          </div>
          <div style={{ color: "#bdbdbd", fontSize: 13 }}>
            {a.description}
          </div>
          <div style={{ color: "#888", fontSize: 12, marginTop: 7 }}>
            Created on : {a.createdAt}
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
            <button style={{
              background: "black",
              color: "#eee",
              border: "none",
              borderRadius: "6px",
              fontSize: 13,
              fontWeight: 500,
              padding: "5px 15px",
              cursor: "pointer"
            }}>Preview</button>
            <button style={{
              background: "black",
              color: "#eee",
              border: "none",
              borderRadius: "6px",
              fontSize: 13,
              fontWeight: 500,
              padding: "5px 15px",
              cursor: "pointer"
            }}>Edit</button>
            <button style={{
              background: a.status === "Active" ? "#e23c32" : "#2578F4",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: 13,
              fontWeight: 500,
              padding: "5px 15px",
              cursor: "pointer"
            }}>
              {a.status === "Active" ? "Deactivate" : "Activate"}
            </button>
          </div>
        </div>
        <div style={{
          alignSelf: "flex-start",
          marginLeft: 18,
          borderRadius: "6px",
          padding: "3px 15px",
          background: a.status === "Active" ? "#213b23" : "#22282A",
          color: a.status === "Active" ? "#39ff73" : "#b5b5b5",
          fontWeight: 500,
          fontSize: 13,
          minWidth: 59,
          textAlign: "center"
        }}>{a.status}</div>
      </div>
    ))}
  </div>
);

export default Announcements;
