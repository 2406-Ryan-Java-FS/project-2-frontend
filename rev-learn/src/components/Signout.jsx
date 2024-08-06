import { useContext } from "react"
import { ListItem, ListItemButton, ListItemText } from "../../node_modules/@mui/material/index"
import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import { globalStateSetter } from "../App"
import uac from "../controllers/userAccountController"
import { AppContext } from "../provider/AppProvider"

export default function Signout()
{
  let globalContext=useContext(AppContext)
return(<>
    <ListItem key={Math.random()} disablePadding>
    <ListItemText 
      sx={{ textAlign: 'center' }} 
      primary={"Signed in as: "+uac.getLoggedInUser()?.user?.firstName}
    />
    </ListItem>
    <ListItem key={Math.random()} disablePadding>
    <ListItemButton sx={{ textAlign: 'center' }} 
      onClick={
        async ()=>{
          await uac.signout()
          globalContext.navBarGoto('/')
        }
      }>
    <ListItemText primary={"Sign out"}/>
    </ListItemButton>
    </ListItem>
    </>)
}