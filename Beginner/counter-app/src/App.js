import React, { useState } from 'react';
import Button from './ui/Button';

const App = () => {

    const[count , setCount] = useState(0);

    const increase = () => {
        setCount(count+1)
    }

    const decrease = () => {
        setCount(count-1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <main className='flex flex-col justify-center items-center w-full h-screen'>
            <div className='flex flex-col justify-center items-center p-7 rounded-md bg-slate-100'>
            <h1 className='text-5xl font-semibold text-center flex flex-col gap-5'>Count
            <h1 className='text-6xl'>{count}</h1>
            </h1>
            <div className='flex gap-5 mt-7'>
                <Button onClick={decrease} className="px-3 py-2 rounded-lg font-medium text-slate-200 bg-slate-700 hover:bg-slate-800 transition ease-in-out">
                    Decrease
                </Button>
                <Button onClick={reset} className="px-3 py-2 rounded-lg font-medium text-slate-200 bg-slate-700 hover:bg-slate-800 transition ease-in-out">
                    Reset
                </Button>
                <Button onClick={increase} className="px-3 py-2 rounded-lg font-medium text-slate-200 bg-slate-700 hover:bg-slate-800 transition ease-in-out">
                    Increase
                </Button>
            </div>
            </div>
        </main>
    );
};

export default App;