import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../components/common/Http";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const newUserMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newUserMessage]);

    // Clear input
    setInput("");

    try {
      const res = await axios.post(
        `${apiUrl}/ai/chat`,
        { message: input }
      );

      // Add AI reply
      const aiMessage = { sender: "ai", text: res.data.response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = { sender: "ai", text: "Error: Try again later" };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>AI Shopping Assistant</h2>

      {/* Chat Window */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <b>{msg.sender === "user" ? "You:" : "AI:"}</b>{" "}
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about products"
        style={{ width: "80%", padding: "8px" }}
      />

      <button onClick={sendMessage} style={{ padding: "8px 12px" }}>
        Send
      </button>
    </div>
  );
}