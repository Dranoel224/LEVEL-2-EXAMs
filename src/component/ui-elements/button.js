import React, {useEffect, useState} from "react";

function Button({name, classAttrib, handleSubmit}){
    
    return (
        <button className={classAttrib} onClick={(event) => handleSubmit(event)}>
            {name}
        </button>);
}
export default Button;