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

  useEffect(() => {
    localStorage.setItem("adamDarkMode", darkMode);
  }, [darkMode]);

  // WhatsApp share link
  const shareToWhatsApp = () => {
    const message = encodeURIComponent(`🧠 Adam's AI says:\n\n"${quote}"`);
    const link = `https://wa.me/?text=${message}`;
    window.open(link, "_blank");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: darkMode
          ? "linear-gradient(-45deg, #0f172a, #1e293b, #0f172a)"
          : "linear-gradient(-45deg, #dbeafe, #e0e7ff, #f5f3ff)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 12s ease infinite",
        fontFamily: "system-ui, -apple-system",
        transition: "all 0.4s ease-in-out",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* Animated gradient keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spinRobot {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Spinning robot icon */}
      <div
        style={{
          width: "70px",
          height: "70px",
          animation: "spinRobot 7s linear infinite",
          marginBottom: "10px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
          alt="robot"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Profile picture */}
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
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      />

      {/* Dark mode toggle */}
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
          transition: "all 0.3s ease",
        }}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🤖 Adam’s AI</h1>

      {/* Quote animation */}
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "500px",
          padding: "0 20px",
          opacity: animateQuote ? 1 : 0,
          transform: animateQuote ? "translateY(0px)" : "translateY(10px)",
          color: darkMode ? "#d1d5db" : "#4b5563",
          transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        {quote}
      </p>

      {/* Generate Quote button */}
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
          marginBottom: "10px",
          boxShadow: "0 6px 16px rgba(99,102,241,0.25)",
          transition: "all 0.3s ease",
        }}
      >
        Generate Quote
      </button>

      {/* Share to WhatsApp */}
      <button
        onClick={shareToWhatsApp}
        style={{
          backgroundColor: "#22c55e",
          color: "#fff",
          padding: "10px 24px",
          borderRadius: "8px",
          border: "none",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(34,197,94,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        Share to WhatsApp 📤
      </button>

      <small
        style={{
          position: "absolute",
          bottom: "12px",
          color: darkMode ? "#9ca3af" : "#6b7280",
        }}
      >
        © 2025 Adam’s AI
      </small>
    </div>
  );
}
