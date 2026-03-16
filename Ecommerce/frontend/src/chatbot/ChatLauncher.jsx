// src/components/ChatLauncher.jsx
import React from "react";

import chatbot from "/assets/chatbot.jpg";


export default function ChatLauncher({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        background: "#007bff",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 999,
      }}
    >
      <img
        src={chatbot}// put your chat icon here
        alt="Chat"
        className="rounded-full"
        style={{ width: "32px", height: "32px" }}
      />
    </div>
  );
}