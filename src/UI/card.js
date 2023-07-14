import React from "react";

const Card = (props) =>{
    return (
        <div className="bg-blue-200 rounded shadow w-[80%] m-auto p-4 mb-9 mt-10">
            {props.children}
        </div>
    )
}

export default Card;