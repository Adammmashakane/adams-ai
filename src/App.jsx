import React, { useState, useEffect } from "react";

export default function App() {
  const [category, setCategory] = useState("ai");
  const [quote, setQuote] = useState("Click the button to generate a quote!");
  const [animateQuote, setAnimateQuote] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("adamDarkMode") === "true"
  );

  // QUOTES BY CATEGORY
  const quoteCategories = {
    ai: [
      "AI doesn’t replace humans — it amplifies them.",
      "Your imagination is the intelligence behind AI.",
      "AI is the engine; creativity is the driver.",
      "Humans teach; AI learns.",
    ],
    motivation: [
      "Small steps create big results.",
      "Success begins with self-belief.",
      "Discipline beats motivation.",
      "Your future is built by what you do today.",
    ],
    business: [
      "Think big. Start small. Move fast.",
      "Execution is the real strategy.",
      "Money follows value — create value.",
      "Winners focus on solutions, not excuses.",
    ],
    life: [
      "Your thoughts shape your reality.",
      "Peace is the new success.",
      "What you don’t fix, you repeat.",
      "Growth begins outside your comfort zone.",
    ],
    coding: [
      "First solve the problem, then write the code.",
      "Good code is simple, not clever.",
      "Bugs are opportunities to learn.",
      "Code is poetry for machines.",
    ],
  };

  const generateQuote = () => {
    const list = quoteCategories[category];
    const randomIndex = Math.floor(Math.random() * list.length);

    setAnimateQuote(false);
    setTimeout(() => {
      setQuote(list[randomIndex]);
      setAnimateQuote(true);
    }, 120);
  };

  useEffect(() => {
    document.body.style.opacity = 1;
  }, []);

  useEffect(() => {
    localStorage.setItem("adamDarkMode", darkMode);
  }, [darkMode]);

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
        textAlign: "center"
      }}
    >
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

      {/* Robot Icon */}
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

      {/* Profile */}
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

      {/* Dark/Light toggle */}
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

      {/* Category Selector */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px 16px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "15px",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: darkMode ? "#334155" : "#e2e8f0",
          color: darkMode ? "#f1f5f9" : "#1e293b",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <option value="ai">AI Wisdom</option>
        <option value="motivation">Motivation</option>
        <option value="business">Business / Hustle</option>
        <option value="life">Life Lessons</option>
        <option value="coding">Coding Quotes</option>
      </select>

      {/* QUOTE */}
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "500px",
          padding: "0 20px",
          opacity: animateQuote ? 1 : 0,
          transform: animateQuote ? "translateY(0)" : "translateY(10px)",
          color: darkMode ? "#d1d5db" : "#4b5563",
          transition: "all 0.6s ease",
        }}
      >
        {quote}
      </p>

      {/* Generate Button */}
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
        }}
      >
        Generate Quote
      </button>

      {/* WhatsApp Share */}
      <button
        onClick={shareToWhatsApp}
        style={{
          backgroundColor: "#22c55e",
          color: "#fff",
          padding: "10px 24px",
          borderRadius: "10px",
          border: "none",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 6px 16px rgba(34,197,94,0.3)",
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
