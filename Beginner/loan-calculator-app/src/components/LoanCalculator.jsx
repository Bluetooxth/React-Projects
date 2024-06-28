import React, { useState } from "react";

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanDuration, setLoanDuration] = useState(0);
    const [loanRepayment, setLoanRepayment] = useState(0);

    const calculateLoan = () => {
        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanDuration)) {
            alert("Please enter a valid value");
            return;
        } else {
            const interest = loanAmount * (interestRate / 100) * loanDuration;
            const totalAmount = loanAmount + interest;
            setLoanRepayment(totalAmount);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-3 bg-slate-300 py-7 px-10 rounded-lg border-x-4 border-zinc-900">
            <h1 className="text-3xl font-semibold p-4 border-b-4 border-zinc-900 text-center">Loan Calculator</h1>
            <label className="self-start text-xl font-semibold" htmlFor="loanAmount">Loan Amount</label>
            <input
                className="bg-slate-100 px-3 py-2 rounded-lg outline-none text-zinc-900 font-medium"
                type="number"
                name="loanAmount"
                placeholder="Loan Amount"
                id="loanAmount"
                onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
            />
            <label className="self-start text-xl font-semibold" htmlFor="interestRate">Loan Interest</label>
            <input
                className="bg-slate-100 px-3 py-2 rounded-lg outline-none text-zinc-900 font-medium"
                type="number"
                name="interestRate"
                placeholder="Loan Interest"
                id="interestRate"
                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
            />
            <label className="self-start text-xl font-semibold" htmlFor="loanDuration">Loan Duration</label>
            <input
                className="bg-slate-100 px-3 py-2 rounded-lg outline-none text-zinc-900 font-medium"
                type="number"
                name="loanDuration"
                placeholder="Loan Duration"
                id="loanDuration"
                onChange={(e) => setLoanDuration(parseFloat(e.target.value) || 0)}
            />
            <button className="font-medium bg-zinc-800 hover:bg-zinc-900 p-2 rounded-lg w-full text-slate-200" onClick={calculateLoan}>Calculate</button>
            <h2 className="text-xl font-semibold self-start">Loan Repayment: {loanRepayment}</h2>
        </div>
    );
};

export default LoanCalculator;