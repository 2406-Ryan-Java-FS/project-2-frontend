import { Link } from "../../node_modules/react-router-dom/dist/index"

export default function HomeComponent() {



    return(
        <>

        {<nav id="navbar">
          <Link to="/">Home</Link>{" ~ "}
          <Link to="/login">Login</Link>{" ~ "}
          <Link to="/register">Register</Link>
        </nav>}

        </>
    )
}