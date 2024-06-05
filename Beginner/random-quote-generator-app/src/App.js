import React, { useState, useEffect } from "react";
import Quotes from "./Data/Quotes";

const App = () => {
  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const randomQuote = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[randomQuote]);
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <main className="flex justify-center items-center mt-[200px] w-full">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl font-semibold mb-5 heading p-3">Random Programming Quotes</h1>
        <button
          onClick={generateQuote}
          className="px-3 py-2 bg-blue-700 hover:bg-blue-800 transition ease-in-out rounded-md text-slate-200 font-semibold"
        >
          Generate Quote
        </button>
        <div className="flex justify-center items-center p-4 rounded-md border-2 border-slate-400 max-w-[500px] text-xl font-medium text-slate-100 card">
          {quote}
        </div>
      </div>
    </main>
  );
};

export default App;