// src/components/ChatModal.jsx
import React from "react";
import AIChat from "./AIChat";

export default function ChatModal({ isOpen, onClose }) {
  if (!isOpen) return null; // modal hidden when false

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          background: "#fff",
          borderRadius: "8px",
        }}
      >
        <button
          onClick={onClose}
          style={{ float: "right", margin: "8px", cursor: "pointer" }}
        >
          ✕
        </button>

        {/* AI Chat UI */}
        <div style={{ padding: "10px" }}>
          <AIChat />
        </div>
      </div>
    </div>
  );
}