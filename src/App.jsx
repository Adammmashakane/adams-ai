import React, { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState("Click the button to generate a quote!");
  const [animateQuote, setAnimateQuote] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("adamDarkMode") === "true"
  );

  const quotes = [
    "AI doesn’t replace humans — it amplifies them.",
    "Innovation begins when curiosity meets code.",
    "Your imagination is the intelligence behind AI.",
    "The future belongs to those who learn from machines, not fear them.",
    "Data teaches AI — creativity teaches progress."
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    setAnimateQuote(false);
    setTimeout(() => {
      setQuote(quotes[randomIndex]);
      setAnimateQuote(true);
    }, 100);
  };

  useEffect(() => {
    document.body.style.opacity = 1;
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("adamDarkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: darkMode ? "#111827" : "#f5f7fa",
        color: darkMode ? "#f3f4f6" : "#111827",
        fontFamily: "system-ui, -apple-system",
        transition: "all 0.4s ease-in-out",
        position: "relative",
        textAlign: "center"
      }}
    >
      {/* Profile picture top right */}
      <img
        src="https://i.postimg.cc/59TPb2S4/ai-avatar.png"
        alt="profile"
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          border: darkMode ? "2px solid #6366f1" : "2px solid #4f46e5",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        }}
      />

      {/* Mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "8px 16px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          backgroundColor: darkMode ? "#4b5563" : "#e5e7eb",
          color: darkMode ? "#f9fafb" : "#111827",
          fontSize: "0.9rem",
          transition: "all 0.3s ease"
        }}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🤖 Adam’s AI</h1>

      {/* Animated quote */}
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "500px",
          padding: "0 20px",
          opacity: animateQuote ? 1 : 0,
          transform: animateQuote ? "translateY(0px)" : "translateY(10px)",
          color: darkMode ? "#d1d5db" : "#4b5563",
          transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)"
        }}
      >
        {quote}
      </p>

      {/* Quote Button */}
      <button
        onClick={generateQuote}
        style={{
          backgroundColor: "#6366f1",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: "12px",
          border: "none",
          fontSize: "1.1rem",
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(99,102,241,0.25)",
          transition: "all 0.3s ease"
        }}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
      >
        Generate Quote
      </button>

      {/* Footer */}
      <small
        style={{
          position: "absolute",
          bottom: "12px",
          color: darkMode ? "#9ca3af" : "#6b7280",
          fontSize: "0.85rem"
        }}
      >
        © 2025 Adam’s AI
      </small>
    </div>
  );
}
