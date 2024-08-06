
import uac from "../controllers/userAccountController";

export default function HomeComponent()
{
return(<>
    Home Page<br/>
    Please use navigation bar in the top left<br/>
    {uac.getLoggedInUser()==undefined?<>Not signed in</>:<>Signed in as {uac.getLoggedInUser()?.user?.firstName}</>}
</>)
}
