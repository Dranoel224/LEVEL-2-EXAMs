import { createBrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./userSignUp.css";
import { Link } from "react-router-dom"



function UserSignUp() {
    return (
        <>
        <div className="field">
            <strong><p>Sign Up</p></strong><br />
            <p className="link_to_google">G-Sign up with Google</p><br />
            <hr /><br /><br />
            <div className="i">
                <label>Name</label><br />
                <input className="inp_ut1" type="text" placeholder="  Leslie Alenxander" /><br /><br />
                <label>Email</label><br />
                <input className="inp_ut2" type="text" placeholder="  example@gmail.com" /><br /><br />
                <label>Password</label><br />
                <input className="inp_ut3" type="password" placeholder="  at least 8 characters" /><br /><br/><hr /><br />
                <label className="inp_ut5"><input className="inp_ut4" type="checkbox" />I Agree with <a href="./terms">Terms</a> and <a href="./privacy">Privacy</a></label>
                </div><br />
                <button type="button" name="Sign up">Sign Up</button>
                <br />
                <hr />
                <br />
            <p className="endSignUp">Already have an account?</p>
            <Link to="/userLogIn">Login</Link>
        </div>
        </>
    )
}
export default UserSignUp();