import React , {useState} from "react";

const Input = ({type , placeholder , value , onChange}) => {
    return(
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="px-3 py-2 rounded-lg font-medium font-xl bg-slate-900 w-full outline-none transition ease-in-out">
        </input>
    )
}

export default Input;