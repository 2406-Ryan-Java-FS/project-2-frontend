

import { Navigate } from "../../node_modules/react-router-dom/dist/index";
import uac from "../controllers/userAccountController";

export default function HomeComponent()
{
    if(uac.getLoggedInUser()?.user?.role=="educator")
    {
        return (<Navigate to="/educatordashboard" />)
    }
    else
    {
        return (<Navigate to="/course-catalog" />)
    }
}