import { useState } from "react";

function Input({ type, placeholder }) {
    const [inputVal, setInputVal] = useState('');
    // const inputVal = useStateReturn[0];
    // const setInputVal = useStateReturn[1];
    // const {Zeldris, Victory, Mark} = {a:2, d:1, e:4}
    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        console.log("The entered value is ", value)
        setInputVal(value);
    }

    return (
        <>
            <input className="form-control" type={type} placeholder={placeholder} onChange={handleChange} />
            {
                inputVal.length > 1 ? <span> {placeholder} <strong>:</strong> {inputVal} </span> : ""}
        </>
    )
}
export default Input;