import { Button, Card, CardContent, CardHeader } from "@mui/material";
import uac from "../controllers/userAccountController";
import { useNavigate } from "react-router-dom";
import { Typography } from "../../node_modules/@mui/joy/index";
import "../styles/sign.css"

export default function Signup() {
    let navigateUsingReact = useNavigate()
    return (<>
        <center>
            {/* <Card varient="outlined" sx={{ maxWidth: 345 }}>
<CardHeader title="RevLearn"/>
<CardContent>
    Can't apply a color to this from App.css
</CardContent>
</Card> */}
            <table style={{ backgroundColor: '#F36928' }}>
                <tr><td colSpan={2}>
                    <Typography sx={{ textAlign: 'center', color: '#fff', fontSize: '20px' }}>
                        Rev Learn Registration
                    </Typography>
                </td></tr>
                <tr><td><Typography sx={{color: '#fff'}}>First Name</Typography></td>         <td><input id="SignupFirstName" type="text" /></td></tr>
                <tr><td><Typography sx={{color: '#fff'}}>Last Name</Typography></td>          <td><input id="SignupLastName" type="text" /></td></tr>
                <tr><td><Typography sx={{color: '#fff'}}>Email</Typography></td>              <td><input id="SignupEmail" type="text" /></td></tr>
                <tr><td><Typography sx={{color: '#fff'}}>Password</Typography></td>           <td><input id="SignupPassword" type="password" /></td></tr>
                <tr><td><Typography sx={{color: '#fff'}}>Confirm Password</Typography></td>   <td><input id="SignupPasswordConfirm" type="password" /></td></tr>
                <tr><td colSpan={2}>

                    <center>
                        <Button
                            variant='outlined'
                            sx={{ backgroundColor: 'white' }}
                            onClick={
                                async () => {
                                    await uac.signup(
                                        document.getElementById("SignupFirstName").value,
                                        document.getElementById("SignupLastName").value,
                                        document.getElementById("SignupEmail").value,
                                        document.getElementById("SignupPassword").value,
                                        document.getElementById("SignupPasswordConfirm").value
                                    )
                                    navigateUsingReact('/signin')
                                }
                            }>Register</Button>
                    </center>
                </td></tr>
            </table>
        </center>
    </>)
}