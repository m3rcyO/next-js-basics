import React from "react";

function Button({name}) {
    return (
        <p className="w-[250px] h-[40px] bg-slate-300 rounded-md flex justify-center items-center">
            {name}
        </p>
    )
}
export default Button