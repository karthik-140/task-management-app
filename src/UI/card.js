import React from "react";

const Card = (props) =>{
    return (
        <div className="overflow-x-scroll sm:overflow-hidden bg-blue-200 rounded shadow w-[80%] m-auto p-4 mb-9 mt-10">
            {props.children}
        </div>
    )
}

export default Card;