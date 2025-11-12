import React, { useState } from 'react'

export default function App() {
  const quotes = [
    "AI doesn’t replace humans — it amplifies them.",
    "Innovation begins when curiosity meets code.",
    "Your imagination is the intelligence behind AI.",
    "The future belongs to those who learn from machines, not fear them.",
    "Data teaches AI — creativity teaches progress."
  ]

  const [quote, setQuote] = useState("Welcome — press Generate to see an AI-inspired quote.")

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f9fafb',
      textAlign: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Adam's AI</h1>
      <p style={{ fontSize: '18px', color: '#333', marginBottom: '20px', padding: '0 20px' }}>{quote}</p>
      <button
        style={{
          background: '#4f46e5',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px'
        }}
        onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}
      >
        Generate Quote
      </button>
    </div>
  )
}
