import { Link } from "react-router-dom";
import uac from "../controllers/userAccountController";


export default function SignedInAs()
{
    if(uac.loggedInUser==undefined)
        return(<Link to="/login">Login</Link>)
    else
        return(
        <>Logged in as {uac.loggedInUser.firstName}</>)
}