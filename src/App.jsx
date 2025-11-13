import React, { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState("Click the button to generate a quote!");
  const [animateQuote, setAnimateQuote] = useState(false);

  const quotes = [
    "AI doesn’t replace humans — it amplifies them.",
    "Innovation begins when curiosity meets code.",
    "Your imagination is the intelligence behind AI.",
    "The future belongs to those who learn from machines, not fear them.",
    "Data teaches AI — creativity teaches progress.",
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Trigger animation
    setAnimateQuote(false);
    setTimeout(() => {
      setQuote(quotes[randomIndex]);
      setAnimateQuote(true);
    }, 100);
  };

  // Trigger fade-in of entire page
  useEffect(() => {
    document.body.style.opacity = 1;
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f5f7fa",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        textAlign: "center",
        color: "#111827",
        transition: "opacity 1s ease-in-out",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>🤖 Adam’s AI</h1>

      {/* Quote text animation */}
      <p
        style={{
          fontSize: "1.3rem",
          maxWidth: "500px",
          color: "#4b5563",
          marginBottom: "2rem",
          padding: "0 20px",
          opacity: animateQuote ? 1 : 0,
          transform: animateQuote ? "translateY(0px)" : "translateY(10px)",
          transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        {quote}
      </p>

      {/* Button with Apple-style animation */}
      <button
        onClick={generateQuote}
        style={{
          backgroundColor: "#6366f1",
          color: "#fff",
          border: "none",
          padding: "12px 28px",
          borderRadius: "12px",
          fontSize: "1.1rem",
          cursor: "pointer",
          transition: "all 0.25s ease",
          boxShadow: "0 6px 16px rgba(99,102,241,0.2)",
        }}
        onMouseDown={(e) => {
          e.target.style.transform = "scale(0.95)";
        }}
        onMouseUp={(e) => {
          e.target.style.transform = "scale(1)";
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = "0 8px 22px rgba(99,102,241,0.35)";
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = "0 6px 16px rgba(99,102,241,0.2)";
        }}
      >
        Generate Quote
      </button>

      <small
        style={{
          position: "absolute",
          bottom: "12px",
          color: "#9ca3af",
          fontSize: "0.85rem",
        }}
      >
        © 2025 Adam’s AI
      </small>
    </div>
  );
}
