import { createBrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./forgotPassword.css";
import { Link } from "react-router-dom"


function ForgotPassword() {
    return (
        <>
        <div className="field">
            <strong><p>Put in your initial account creation credentials</p></strong><br />
            <p className="link_to_google">G-Sign up with Google</p><br />
            <hr /><br /><br />
            <div className="i">
                <label>Name</label><br />
                <input className="inp_ut1" type="text" placeholder="  Leslie Alenxander" /><br /><br />
                <label>Email</label><br />
                <input className="inp_ut2" type="text" placeholder="  example@gmail.com" /><br /><br />
                <label>Date</label><br />
                <input className="inp_ut6" type="date" /><br /><br />
                <label>Password</label><br />
                <input className="inp_ut3" type="password" placeholder="  at least 8 characters" /><br /><br/><hr /><br />
                </div><br />
                <button type="button" name="Sign up" className="fgtPswd"><Link to="/userLogIn">Retrive Account</Link></button>
                <br />
                <hr />
        </div>
        </>
    )
}
export default ForgotPassword();