
export default function Login()
{
return(<>
<center>
<table>
    <tr><td colSpan={2}><h2>Rev Learn Login</h2></td></tr>
    <tr><td>Email</td><td><input type="text"/></td></tr>
    <tr><td>Password</td><td><input type="password"/></td></tr>
    <tr>
        <td colSpan={2}>
            <button style={{width:'100%'}}>Sign In</button><br/>
            <button style={{width:'100%'}}>New Account</button>
        </td>
    </tr>
</table>
</center>
</>)
}