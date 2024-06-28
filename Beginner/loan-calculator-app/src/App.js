import React from "react";
import LoanCalculator from "./components/LoanCalculator";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-100">
      <LoanCalculator />
    </div>
  );
}

export default App;