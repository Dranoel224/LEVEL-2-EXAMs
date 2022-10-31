import React, { useState } from "react";
function Profile({inputVal, type, placeholder}) {
    // const inputVal = useStateReturn[0];
    // const setInputVal = useStateReturn[1];
    // const {Zeldris, Victory, Mark} = {a:2, d:1, e:4}
    const bringChange = () =>  {
        let collectObject = {
            myInput:inputVal
        }
    };
        // event.preventDefault();
        // let value = event.target.value;
        // console.log("The entered value is ", value)
        // setInputVal(value);
    

    return (
        <>
            <input className="form-control" type={type} placeholder={placeholder} onChange={bringChange} />
        </>
    )
}
export default Profile;