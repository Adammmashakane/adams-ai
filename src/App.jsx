import React from "react";

export default function App() {
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
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>👋 Welcome to Adam’s AI</h1>
      <p style={{ fontSize: "1rem", color: "#4b5563", textAlign: "center" }}>
        Your personal AI companion is now live on Vercel.
      </p>
      <small style={{ position: "absolute", bottom: "10px", color: "#9ca3af" }}>
        © 2025 Adam’s AI
      </small>
    </div>
  );
}
