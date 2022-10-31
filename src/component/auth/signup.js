import Button from "../ui-elements/button";
import Input from "../ui-elements/input";
// import Profile from "../ui-elements/profile";
import React, { useEffect, useState } from "react";
import about from "../pages/about";
import contact from "../pages/contact";
import events from "../pages/events";
import home from "../pages/home";
import Ourteam from "../pages/ourTeam";


function SignUpForm() {

    let isLoggedIn = false;
    //let username = isLoggedIn? isLoggedIn: false;

    const handleBackBtn = (event) => {
        event.preventDefault();
        console.log("Back Button Clicked")
    };
    const handleSubmitBtn = (event, value) => {
        event.preventDefault();
        console.log("Submit Button Clicked")
        localStorage.setItem(value, JSON.stringify(value));
    };

    return (
        
        <form className='form-container'>
            
            <Input type="text" placeholder='username' />
            <Input type="password" placeholder='password' />
            <Input type="password" placeholder='confirm-password' />

            <div className="btn-container">
                {
                    isLoggedIn ? <Button name="Back" classAttrib="btn back-btn" handleSubmit={handleBackBtn} />
                        : ""
                }
                <Button name="Submit" classAttrib="btn submit-btn" handleSubmit={handleSubmitBtn} />
            </div>

            {/* <Button name="Cross" classAttrib="btn to-next" /> */}

        </form>
    )
}
export default SignUpForm();