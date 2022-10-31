
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import about from "./about";
import contact from "./contact";
import Events from "./events";
import Home from "./home";
import OurTeam from "./ourTeam";
import "./navbar.css";

function NavBar() {
    return (

        <div className="navBar">
            <a href={about}/>
            <a href={contact} />
            {/* <a href={<Events />} />
            <a href={<Home />} />
            <a href={<OurTeam />} /> */}
        </div>
    )
}
export default NavBar();