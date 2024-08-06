import { useNavigate } from "react-router-dom"
import uac from "../controllers/userAccountController"
import { Typography } from "../../node_modules/@mui/joy/index"
import { Button } from "../../node_modules/@mui/joy/index"
import { globalStateSetter } from "../App"

export default function Signin() {
    let naviageUsingReact = useNavigate()

    return (<>
        <center>
            <table style={{ backgroundColor: '#F36928', border: 'solid black 1px' }}>
                <tr><td colSpan={2}>
                    <Typography sx={{ textAlign: 'center' }}>
                        Rev Learn Login
                    </Typography>
                </td></tr>
                <tr><td><Typography>Email</Typography></td><td><input id="SigninEmail" type="text" /></td></tr>
                <tr><td><Typography>Password</Typography></td><td><input id="SigninPassword" type="password" /></td></tr>
                <tr>
                    <td colSpan={2}>
                        <center>
                            <Button
                                variant='outlined'
                                sx={{ backgroundColor: 'white' }}
                                onClick={
                                    async () => {
                                    await uac.signin(
                                        document.getElementById("SigninEmail").value,
                                        document.getElementById("SigninPassword").value)
                                    
                                    naviageUsingReact("/")
                                    globalStateSetter()//cause re-render
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