import { Link } from "../../../node_modules/react-router-dom/dist/index"
import { Toolbar } from "../../../node_modules/@mui/material/index"
import { Button } from "../../../node_modules/@mui/material/index"
import { useEffect, useState } from "react";

export default function NavBar({ loggedIn, setLoggedIn }) {


    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            setLoggedIn(true);
        }
      }, []);

    return (<>

        {
            <Toolbar sx={{
                //this rgb value is semi transparent
                flexGrow: 1, background: 'rgba(0,0,0,0.5)',
                color: 'black', fontSize: '32px',
                border: 'solid black 1px', justifyContent: 'center'
            }}
                variant="menu"
                position="static"
            >
                <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to=''
                    >
                    Home
                </Button>
                <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to='/register'
                    >
                    Register
                </Button>

                { !loggedIn && 
                (
                    <Button variant='contained' sx={{margin: '10px'}}
                    component={Link} to='/signin'>
                        Login
                    </Button>
                )
                }

                <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to='/student'>
                    Student
                </Button>
                <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to='/educatordashboard'>
                    Educator
                </Button>
                
                {/* <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to='/quiz'>
                    Quiz
                </Button>
                <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to='/create-quiz'>
                    Create New Quiz
                </Button>
                <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to='/edit-question'>
                    Edit Question
                </Button> */}

                {loggedIn &&
                    (
                        <Button
                            variant='contained'
                            sx={{ margin: '10px' }}
                            onClick={() => {
                                localStorage.clear();
                                alert('Logging out, redirecting to login page...');
                                window.location.href = '/signin';
                            }}
                        >
                            Logout
                        </Button>
                    )

}


            </Toolbar>




        }

    </>)
}