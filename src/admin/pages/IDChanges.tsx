import React from "react";
import { Check, X } from "lucide-react";

type Request = {
  name: string;
  email: string;
  createdAt: string;
  currentId: string;
  requestedId: string;
  reason: string;
};

const requests: Request[] = [
  {
    name: "Alice Johnson",
    email: "alice.john@example.com",
    createdAt: "2025-10-27 09:30",
    currentId: "TV_OLD_1234TV_OLD_12",
    requestedId: "TV_OLD_1234TV_OLD_12",
    reason:
      "Changed my TradingView account to a premium subscription and need to update the ID to access advanced features.",
  },
  {
    name: "Bob Martinez",
    email: "bob.m@example.com",
    createdAt: "2025-10-27 08:15",
    currentId: "TV_OLD_1234TV_OLD_12",
    requestedId: "TV_OLD_1234TV_OLD_12",
    reason:
      "My previous account was compromised. I created a new TradingView account for security reasons.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const IDChanges: React.FC = () => (
  <div
    style={{
      background: "#181A20",
      borderRadius: 16,
      padding: "30px 36px 36px 36px",
      minHeight: 360,
      position: "relative",
      boxShadow: "0 2px 8px 0 #10101060",
      maxWidth: 950,
      margin: "0 auto",
    }}
  >
    <div style={{ color: "#ddd", fontSize: 15, fontWeight: 500, marginBottom: 18 }}>
      TradingView ID Change Requests
    </div>
    <button
      style={{
        position: "absolute",
        right: 36,
        top: 36,
        background: "#23272f",
        color: "#DDD",
        border: "none",
        borderRadius: 8,
        padding: "7px 14px",
        fontSize: 13,
        cursor: "pointer",
      }}
    >
      History
    </button>
    {/* Search bar */}
    <input
      type="text"
      placeholder="Search by name, email, or ID..."
      style={{
        background: "#23272f",
        border: "1px solid #282932",
        borderRadius: 8,
        color: "#c9ced6",
        fontSize: 15,
        padding: "12px 18px",
        width: "340px",
        marginBottom: 24,
        outline: "none",
        marginTop: 18,
      }}
    />
    {/* Requests List */}
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {requests.map((req, idx) => (
        <div
          key={idx}
          style={{
            background: "#212329",
            borderRadius: 12,
            padding: "18px 18px 18px 22px",
            border: "1px solid #23282f",
            boxShadow: "0 2px 8px #10101025",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
            {/* Avatar */}
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#23282f",
                color: "#8bb5fa",
                fontWeight: 700,
                fontSize: 17,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 6,
              }}
            >
              {getInitials(req.name)}
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>
                {req.name}
              </div>
              <div style={{ color: "#bec3cc", fontSize: 12 }}>{req.email}</div>
              <div style={{ color: "#7c8095", fontSize: 11, marginTop: 2 }}>{req.createdAt}</div>
            </div>
            <div style={{ flex: 1 }} />
            {/* Current & Requested ID Card */}
            <div
              style={{
                background: "#23272f",
                borderRadius: 9,
                padding: "11px 22px 11px 19px",
                minWidth: 265,
                display: "flex",
                alignItems: "center",
                gap: 28,
                color: "#c9ced6",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <span>
                <div style={{ opacity: 0.5, fontSize: 12 }}>Current ID</div>
                <div style={{ fontWeight: 600, marginTop: 1 }}>{req.currentId}</div>
              </span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "#98a0c0" }}>
                &rarr;
              </span>
              <span>
                <div style={{ opacity: 0.5, fontSize: 12 }}>Requested ID</div>
                <div style={{ fontWeight: 600, marginTop: 1 }}>{req.requestedId}</div>
              </span>
            </div>
            {/* Buttons */}
            <div style={{ display: "flex", gap: 8, marginLeft: 16 }}>
              <button
                style={{
                  background: "#23272f",
                  color: "#e23c32",
                  border: "none",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "6px 18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <X size={17} />
                Decline
              </button>
              <button
                style={{
                  background: "#165f31",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "6px 19px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Check size={17} />
                Accept
              </button>
            </div>
          </div>
          {/* Reason section */}
          <div
            style={{
              marginTop: 17,
              background: "#121725",
              borderRadius: 8,
              padding: "14px 16px",
              color: "#c9ced9",
              fontSize: 14,
              fontWeight: 500,
              border: "1px solid #202334",
            }}
          >
            <div style={{ opacity: 0.64, fontSize: 13, marginBottom: 4 }}>
              Reason for Change
            </div>
            <div>{req.reason}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default IDChanges;
