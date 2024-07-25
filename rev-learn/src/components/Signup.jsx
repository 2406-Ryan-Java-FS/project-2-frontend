import uac from "../controllers/userAccountController";

export default function Signup()
{
return(<>
<center>
<table>
    <tr><td></td><td><h3>RevLearn</h3></td></tr>
    <tr><td>First Name</td>         <td><input id="SignupFirstName" type="text"/></td></tr>
    <tr><td>Last Name</td>          <td><input id="SignupLastName" type="text"/></td></tr>
    <tr><td>Email</td>              <td><input id="SignupEmail" type="text"/></td></tr>
    <tr><td>Password</td>           <td><input id="SignupPassword" type="password"/></td></tr>
    <tr><td>Password Confirm</td>   <td><input id="SignupPasswordConfirm" type="password"/></td></tr>
    <tr><td></td><td>
        <button onClick={
            ()=>uac.signup(
                document.getElementById("SignupFirstName").value,
                document.getElementById("SignupLastName").value,
                document.getElementById("SignupEmail").value,
                document.getElementById("SignupPassword").value,
                document.getElementById("SignupPasswordConfirm").value
            )
            
        }>Sign up!</button>
    </td></tr>
</table>
</center>
</>)
}