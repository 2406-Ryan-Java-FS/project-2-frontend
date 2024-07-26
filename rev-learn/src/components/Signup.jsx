import { Button, Card, CardContent, CardHeader } from "@mui/material";
import uac from "../controllers/userAccountController";

export default function Signup()
{
return(<>
<center>
{/* <Card varient="outlined" sx={{ maxWidth: 345 }}>
<CardHeader title="RevLearn"/>
<CardContent>
    Can't apply a color to this from App.css
</CardContent>
</Card> */}
<table>
    <tr><td colSpan={2}><h2>Rev Learn Sign up</h2></td></tr>
    <tr><td>First Name</td>         <td><input id="SignupFirstName" type="text"/></td></tr>
    <tr><td>Last Name</td>          <td><input id="SignupLastName" type="text"/></td></tr>
    <tr><td>Email</td>              <td><input id="SignupEmail" type="text"/></td></tr>
    <tr><td>Password</td>           <td><input id="SignupPassword" type="password"/></td></tr>
    <tr><td>Password Confirm</td>   <td><input id="SignupPasswordConfirm" type="password"/></td></tr>
    <tr><td colSpan={2}>
        <center>
        <button onClick={
            ()=>uac.signup(
                document.getElementById("SignupFirstName").value,
                document.getElementById("SignupLastName").value,
                document.getElementById("SignupEmail").value,
                document.getElementById("SignupPassword").value,
                document.getElementById("SignupPasswordConfirm").value
            )
            
        }>Sign me up ! !</button>
        </center>
    </td></tr>
</table>
</center>
</>)
}