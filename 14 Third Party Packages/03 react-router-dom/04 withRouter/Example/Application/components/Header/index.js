/* -----> Third Party Packages <----- */
import { Link, withRouter } from "react-router-dom"; // routing Component Link => Hyperlink ,

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

/*
The Link Component creates hyperlinks that allows to navigate around in application.
The to prop specifies absolute path.
To provide history prop to other components, we can wrap it with the withRouter function while exporting it.
*/


// Functional Component
const Header = (props) => {
    console.log("Header Component")
	
	// This Component rendered by withRouter, So this Component get Extra  props also
	console.log(props)
	
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
                    <button className="logout-button" type="button">Logout</button>
                </Link>
            </div>

        </nav>
    )
}



/* -----> Default Export <----- */
export default withRouter(Header)  // To provide history prop to other components, we can wrap it with the withRouter function while exporting it.
