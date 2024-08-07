

import { useContext } from "react";
import { Navigate } from "../../node_modules/react-router-dom/dist/index";
import uac from "../controllers/userAccountController";
import { AppContext } from "../provider/AppProvider";

export default function HomeComponent()
{
    let globalContext=useContext(AppContext)

    if(uac.getLoggedInUser()?.user?.role=="educator")
    {
        globalContext.navBarGoto('/educatordashboard')//<--causes app re-render
        //return (<Navigate to="/educatordashboard" />)//wasn't re-rendering
    }
    else
    {
        globalContext.navBarGoto('/course-catalog')//<--causes app re-render
        //return (<Navigate to="/course-catalog" />)
    }
}