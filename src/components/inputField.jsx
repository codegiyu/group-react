import React from "react";
import "../index.css";


const InputField = ({prop}) => {
    let {type, label, placeholder, isRequired} = prop
    return (
        <div>
            <label className="">
                { label }{isRequired ? "*" : ""}
            </label>
            <input type={type} className="w-full py-3 px-8 outline-0 border border-[#8692A6] rounded-md mt-3 hover:border-[#1565D8] hover:shadow-sm focus:border-[#1565D8] focus:shadow-sm" placeholder={placeholder} />
        </div>
    )
}

export default InputField