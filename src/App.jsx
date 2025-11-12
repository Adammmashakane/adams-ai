import React, { useState } from "react";

export default function App() {
  const [quote, setQuote] = useState("Click the button to generate a quote!");

  const quotes = [
    "AI doesn’t replace humans — it amplifies them.",
    "Innovation begins when curiosity meets code.",
    "Your imagination is the intelligence behind AI.",
    "The future belongs to those who learn from machines, not fear them.",
    "Data teaches AI — creativity teaches progress.",
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f9fafb",
        fontFamily: "sans-serif",
        color: "#111827",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🤖 Adam’s AI</h1>
      <p style={{ fontSize: "1.1rem", color: "#4b5563", marginBottom: "2rem", padding: "0 20px" }}>
        {quote}
      </p>

      <button
        onClick={generateQuote}
        style={{
          backgroundColor: "#4f46e5",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Generate Quote
      </button>

      <small
        style={{
          position: "absolute",
          bottom: "10px",
          color: "#9ca3af",
        }}
      >
        © 2025 Adam’s AI
      </small>
    </div>
  );
}
