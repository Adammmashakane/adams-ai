import React, { useState } from "react";

export default function App() {
  const quotes = [
    "AI doesn’t replace humans — it amplifies them.",
    "Innovation begins when curiosity meets code.",
    "Your imagination is the intelligence behind AI.",
    "The future belongs to those who learn from machines, not fear them.",
    "Data teaches AI — creativity teaches progress."
  ];

  const [quote, setQuote] = useState("Click below to generate an AI-inspired quote ✨");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
        fontFamily: "system-ui, sans-serif",
        color: "#111827",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🤖 Adam’s AI</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem", maxWidth: "80%" }}>{quote}</p>
      <button
        style={{
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
        onClick={() =>
          setQuote(quotes[Math.floor(Math.random() * quotes.length)])
        }
      >
        Generate Quote
      </button>

      <small
        style={{
          position: "absolute",
          bottom: "10px",
          color: "#9ca3af",
          fontSize: "0.9rem",
        }}
      >
        © 2025 Adam’s AI
      </small>
    </div>
  );
}
