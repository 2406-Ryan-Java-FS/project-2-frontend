import { useNavigate } from "react-router-dom"
import uac from "../controllers/userAccountController"
import { Typography } from "../../node_modules/@mui/joy/index"
import { Button } from "../../node_modules/@mui/joy/index"
import "../styles/sign.css"

export default function Signin() {
    let naviageUsingReact = useNavigate()

    return (<>
        <center>
            <table style={{ backgroundColor: '#F36928'}}>
                <tr><td colSpan={2}>
                    <Typography sx={{ textAlign: 'center', color: '#fff', fontSize: '20px' }}>
                        Rev Learn Login
                    </Typography>
                </td></tr>
                <tr><td><Typography sx={{color: '#fff'}}>Email</Typography></td><td><input id="SigninEmail" type="text" /></td></tr>
                <tr><td><Typography sx={{color: '#fff'}}>Password</Typography></td><td><input id="SigninPassword" type="password" /></td></tr>
                <tr>
                    <td colSpan={2}>
                        <center>
                            <Button
                                variant='outlined'
                                sx={{ backgroundColor: 'white', marginTop:"10px" }}
                                onClick={
                                    () => {
                                        uac.signin(
                                            document.getElementById("SigninEmail").value,
                                            document.getElementById("SigninPassword").value)
                                    }
                                }

                            >Sign In</Button><br />

                            <hr style={{ marginLeft: "8px", marginRight: "8px" }} />

                            <Button
                                variant='outlined'
                                sx={{ backgroundColor: 'white' }}
                                onClick={() => naviageUsingReact('/register')}>New Account
                            </Button>
                        </center>
                    </td>
                </tr>
            </table>
        </center>
    </>)
}