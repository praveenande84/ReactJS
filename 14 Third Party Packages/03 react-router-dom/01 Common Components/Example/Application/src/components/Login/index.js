/* -----> Third Party Packages <----- */
import { Link } from "react-router-dom"; // routing Component => Hyperlink

/* -----> import External Components <----- */
import SignUp from '../SignUp'

/* -----> import styles <----- */
import './index.css' // CSS File

/*
The Link Component creates hyperlinks that allows to navigate around in application.
The to prop specifies absolute path.
*/

/* -----> Creating Components <----- */

// Functional Component
const Login = () => {
    console.log("Login Component")
    return (
        <div className="login-component">
            <h1>Login</h1>
            <Link to="/signup">
                <SignUp/>
            </Link>
        </div>
    )
}

/* -----> Default Export <----- */
export default Login
