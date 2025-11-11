import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('Click below to generate an AI quote');

  const generateQuote = () => {
    const quotes = [
      'AI doesn’t replace humans—it amplifies them.',
      'Innovation begins when curiosity meets code.',
      'Your imagination is the true intelligence behind AI.',
      'The future belongs to those who learn from machines, not fear them.',
      'Data teaches AI—but creativity teaches progress.'
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-6">Adam's AI</h1>
      <p className="text-lg mb-6 max-w-md">{quote}</p>
      <button onClick={generateQuote} className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
        Generate Quote
      </button>
      <footer className="mt-10 text-sm text-gray-500">
        © 2025 Adam's AI
      </footer>
    </div>
  );
}

export default App;
