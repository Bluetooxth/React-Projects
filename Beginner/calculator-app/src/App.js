import React , {useState , useCallback} from "react";

const App = () => {

  const buttons = [
    { id: 'clear', sign: 'C', type: 'function' },
    { id: 'delete', sign: 'DEL', type: 'function' },
    { id: 'divide', sign: '/', type: 'operator' },
    { id: 'none', sign: '', type: '' },
    { id: 'seven', sign: '7', type: 'number' },
    { id: 'eight', sign: '8', type: 'number' },
    { id: 'nine', sign: '9', type: 'number' },
    { id: 'multiply', sign: '*', type: 'operator' },
    { id: 'four', sign: '4', type: 'number' },
    { id: 'five', sign: '5', type: 'number' },
    { id: 'six', sign: '6', type: 'number' },
    { id: 'subtract', sign: '-', type: 'operator' },
    { id: 'one', sign: '1', type: 'number' },
    { id: 'two', sign: '2', type: 'number' },
    { id: 'three', sign: '3', type: 'number' },
    { id: 'add', sign: '+', type: 'operator' },
    { id: 'zero', sign: '0', type: 'number' },
    { id: 'decimal', sign: '.', type: 'number' },
    { id: 'equals', sign: '=', type: 'function' }
  ];  

  return(
    <main className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='flex flex-col justify-center items-center p-7 gap-5 rounded-md bg-slate-100'>
        <h1 className="text-4xl font-bold">Claculator</h1>
        <input className="p-3 bg-gray-800 rounded-lg outline-none text-3xl font-semibold text-slate-200"></input>
        <div className="grid grid-cols-4 justify-center items-center gap-1 w-full">
          {buttons.map((btn , index) => (
            <span key={index} className="p-3 bg-gray-800 text-slate-300 flex justify-center items-center text-center font-medium cursor-pointer rounded-lg">
              {btn.sign}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App