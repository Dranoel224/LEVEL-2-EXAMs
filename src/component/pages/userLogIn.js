import { createBrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./userLogin.css";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import {  Link } from "react-router-dom";
import forgotPassword from "./forgotPassword";




function UserLogIn() {
    return (
        <>
        <div className="field">
            <strong><p>Log In</p></strong><br />
            <div className="link_to_google">G-Sign up with Google</div><br />
            <hr /><br /><br />
            <div className="i">
                <label>Email</label><br />
                <input className="inp_a" type="text" placeholder="  example@gmail.com" /><br /><br />
                <label>Password</label><br />
                <input className="inp_b" type="password" placeholder="  at least 8 characters" /><br /><br />
                <label><input className="inp_c" type="checkbox" />Remember me</label><br /><br />
                <button type="button" name="Log In">Log In</button><br />
                <Link to="/forgotPassword">Forgot Password</Link>
                <br/>
            </div>
            <hr /><br />
            <p className="endLogIn">Don't have an account?</p>
            <Link to="/userSignUp">Sign Up</Link>
            
        </div>
        </>
    )
}
export default UserLogIn();