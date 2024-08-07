import uac from "../controllers/userAccountController"
import { Typography } from "../../node_modules/@mui/joy/index"
import { Button } from "../../node_modules/@mui/joy/index"
import "../styles/sign.css"
import { useContext, useState } from "react"
import { AppContext } from "../provider/AppProvider"

export default function Signin() {
    let globalContext = useContext(AppContext)

    const [loginError, setLoginError] = useState(false);

    const handleSignin = () => {
        const email = document.getElementById("SigninEmail").value
        const password = document.getElementById("SigninPassword").value

        uac.signin(email, password).then(() => {
            globalContext.navBarGoto('/')
        }).catch((error) => {
            console.error("Sign-in failed", error)
            setLoginError(true)
            //set to true after 1.5 seconds
            setTimeout(() => { setLoginError(false) }
                , 1500)
        })
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSignin();
        }
    };

    return (<>
        <center>
            <table style={{ backgroundColor: '#F36928' }}>
                <tr><td colSpan={2}>
                    <Typography sx={{ textAlign: 'center', color: '#fff', fontSize: '20px' }}>
                        Rev Learn Login
                    </Typography>
                </td></tr>
                <tr>
                    <td><Typography sx={{color:"#fff"}}>Email</Typography></td>
                    <td><input id="SigninEmail" type="text" onKeyDown={handleKeyPress} /></td>
                </tr>
                <tr>
                    <td><Typography  sx={{color:"#fff"}}>Password</Typography></td>
                    <td><input id="SigninPassword" type="password" onKeyDown={handleKeyPress} /></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <center>
                            <Button
                                variant='outlined'
                                sx={{ backgroundColor: 'white' }}
                                onClick={handleSignin}

                            >Sign In</Button><br />

                            {loginError && (
                                <Typography sx={{ color: 'red', backgroundColor: 'white', marginTop: "10px" }}>
                                    Email or password was incorrect.
                                </Typography>
                            )}

                            <hr style={{ marginLeft: "8px", marginRight: "8px" }} />

                            <Button
                                variant='outlined'
                                sx={{ backgroundColor: 'white' }}
                                onClick={() => globalContext.navBarGoto('/register')}>New Account
                            </Button>
                        </center>
                    </td>
                </tr>
            </table>
        </center>
    </>)
}