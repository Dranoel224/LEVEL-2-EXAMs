import { createBrowserRouter } from "react-router-dom";
import login from "../component/auth/login";
import SignUpForm from "../component/auth/signup";
import about from "../component/pages/about";
import events from "../component/pages/events";
import home from "../component/pages/home";
import contact from "../component/pages/contact";
import ourTeam from "../component/pages/ourTeam";
import App from "../App";
import wildcard from "../component/pages/wildcard";
import navbar from "../component/pages/navbar";
import userLogIn from "../component/pages/userLogIn";
import userSignUp from "../component/pages/userSignUp";
import forgotPassword from "../component/pages/forgotPassword";
import privacy from "../component/pages/privacy";
import terms from "../component/pages/terms";
import shoppingBasket from "../component/pages/shoppingBasket";

const routes = [
     {path: "/",
      element: App},

    {path: "/signup",
    element: SignUpForm},
    
    {path : "/home",
    element : home},

    {path : "/login",
    element : login},

    {path : "/events",
    element : events},

    {path : "/about",
    element : about},

    {path : "/contact",
    element : contact},

    {path : "/ourTeam",
    element : ourTeam},

    {path : "/navbar",
    element : navbar},
    
    {path : "/userLogIn",
    element : userLogIn},

    {path : "/userSignUp",
    element : userSignUp},

    {path : "/forgotPassword",
    element : forgotPassword},

    {path : "/terms",
    element : terms},

    {path : "/shoppingBasket",
    element : shoppingBasket},

    {path : "/privacy",
    element : privacy},

    {path : "*",
    element : wildcard},
]

export const routerConfig = createBrowserRouter(routes);







// /home
// /signup
// /login
// /about
// /events
// /contact
// /profile
// /dataContainer
// /our-team
