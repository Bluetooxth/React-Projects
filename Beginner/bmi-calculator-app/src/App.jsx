import React, { useState } from 'react';

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    const roundedBMI = calculatedBMI.toFixed(2);
    setBMI(roundedBMI);
  };

  return(
    <main className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col justify-center items-center p-5 gap-3 rounded-lg bg-slate-200">
        <h1 className="text-3xl font-semibold">BMI Calculator</h1>
        <form className="flex flex-col justify-center items-center gap-2" onSubmit={(e) => { e.preventDefault(); calculateBMI(); }}>
          <label className="self-start flex text-xl font-medium" htmlFor="height">Height In CM</label>
          <input className="px-4 py-2 rounded-md bg-gray-700 text-slate-200 outline-none" type="number" placeholder="Height" name="height" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
          <label className="self-start flex text-xl font-medium" htmlFor="weight">Weight In Kg</label>
          <input className="px-4 py-2 rounded-md bg-gray-700 text-slate-200 outline-none" type="number" placeholder="Weight" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <button type="submit" className="text-slate-200 font-medium w-full bg-blue-600 hover:bg-blue-700 transition ease-in-out px-3 py-2 rounded-md">Calculate BMI</button>
          <h1 className="self-start text-2xl font-medium">BMI : {bmi}</h1>
        </form>
      </div>
    </main>
  )
}

export default App;