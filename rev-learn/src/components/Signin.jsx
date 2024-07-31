import { useNavigate } from "react-router-dom"
import uac from "../controllers/userAccountController"

export default function Signin()
{
let naviageUsingReact=useNavigate()

return(<>
<center>
<table>
    <tr><td colSpan={2}><h2>Rev Learn Sign in</h2></td></tr>
    <tr><td>Email</td><td><input id="SigninEmail" type="text"/></td></tr>
    <tr><td>Password</td><td><input id="SigninPassword" type="password"/></td></tr>
    <tr>
    <td colSpan={2}>
        <button style={{width:'100%'}}
        onClick={
            ()=>{
                uac.signin(
                document.getElementById("SigninEmail").value,
                document.getElementById("SigninPassword").value)
            }
        }
        
        >Sign In</button><br/>
        <button style={{width:'100%'}} 
        onClick={()=>naviageUsingReact('/register')}>New Account</button>
    </td>
    </tr>
</table>
</center>
</>)
}