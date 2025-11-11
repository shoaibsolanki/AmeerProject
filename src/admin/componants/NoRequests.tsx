import React from 'react';

const NoRequests: React.FC = () => {
  return (
    <div
      style={{
        background: '#181A20',
        borderRadius: 16,
        padding: '2rem',
        minHeight: 350,
        position: 'relative',
        boxShadow: '0 2px 8px 0 #10101060',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ color: '#ddd', fontSize: 13, marginBottom: 16, fontWeight: 500 }}>
        TradingView ID Change Requests
      </div>
      <button
        style={{
          position: 'absolute',
          right: 36,
          top: 36,
          background: '#23272f',
          color: '#DDD',
          border: 'none',
          borderRadius: 8,
          padding: '6px 14px',
          fontSize: 13,
          cursor: 'pointer',
        }}
      >
        History
      </button>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 280,
          position: 'relative',
        }}
      >
        {/* Replace SVG with your Figma image */}
        <img
          src="/Objects.png" // or "./assets/Objects.png" if within src/assets
          alt="No Requests Placeholder"
          style={{
            width: "260px", maxWidth: "90%", height: "auto", marginTop: 10, zIndex: 2
          }}
        />
        <div style={{ marginTop: 18, color: '#f3f3f3', fontSize: 18, fontWeight: 600, zIndex: 3 }}>
          No New Request
        </div>
      </div>
    </div>
  );
};

export default NoRequests;
