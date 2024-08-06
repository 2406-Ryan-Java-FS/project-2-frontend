import { Link } from "../../../node_modules/react-router-dom/dist/index"
import { Toolbar } from "../../../node_modules/@mui/material/index"
import { Button } from "../../../node_modules/@mui/material/index"

export default function NavBar() {

    

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
                <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to='/login'>
                    Login
                </Button>
                <Button variant='contained' sx={{margin: '10px'}}
                component={Link} to='/course-catalog'>
                    Catalog
                </Button>
                <Button variant='contained' sx={{margin: '10px'}}
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
                </Button>

            </Toolbar>




        }

    </>)
}