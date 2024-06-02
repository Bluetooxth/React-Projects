import React from 'react';
import Button from './ui/Button';

const App = () => {
    return (
        <main>
            <Button className="px-3 py-2 rounded-lg font-medium text-xl bg-slate-200 hover:bg-slate-300 transition ease-in-out">
                Hello This is a Button
            </Button>
            <button>Button</button>
        </main>
    );
};

export default App;