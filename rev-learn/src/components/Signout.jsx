import { ListItem, ListItemButton, ListItemText } from "../../node_modules/@mui/material/index"
import { globalStateSetter } from "../App"
import uac from "../controllers/userAccountController"

export default function Signout()
{
return(<>
    <ListItem key={Math.random()} disablePadding>
    <ListItemText sx={{ textAlign: 'center' }} primary={"Signed in as: "+uac.loggedInUser.firstName}/>
    </ListItem>
    <ListItem key={Math.random()} disablePadding>
    <ListItemButton sx={{ textAlign: 'center' }} 
      onClick={
        async ()=>{
          await uac.signout()
          globalStateSetter()
        }
      }>
    <ListItemText primary={"Sign out"}/>
    </ListItemButton>
    </ListItem>
    </>)
}