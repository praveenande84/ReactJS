/* -----> Third Party Packages <----- */
import { Link } from "react-router-dom"; // routing Component => Hyperlink

/* -----> import styles <----- */
import './index.css'
import Cookies from "js-cookie";  // CSS File

/* -----> Creating Components <----- */

/*
The Link Component creates hyperlinks that allows to navigate around in application.
The to prop specifies absolute path.
*/


// Functional Component
const Header = () => {
    console.log("Header Component")

    const onLogoutButton = () => {
        console.log("onLogoutButton Event Handler")
        Cookies.remove('jwt_token')
    }

    return (
        <nav className="header-component">
            <div className="logo-container">
                <Link className="nav-link" to="/">
                    <h1>Logo</h1>
                </Link>

            </div>
            <ul className="nav-items-list">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>

            </ul>
            <div className="button-container">
                <Link className="nav-link" to="/login">
                    <button className="logout-button" type="button" onClick={onLogoutButton}>Logout</button>
                </Link>
            </div>

        </nav>
    )
}



/* -----> Default Export <----- */
export default Header
