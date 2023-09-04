/* -----> Third Party Packages <----- */
import Cookies from 'js-cookie'  // Cookies is used to store data on client-side with expiry duration.
import {Redirect} from 'react-router-dom'  // Redirect Component is used to redirect to another path


/* -----> import External Components <----- */
import Header from "../Header";

/* -----> import styles <----- */
import './index.css' // CSS File


/* -----> Creating Components <----- */

// Functional Component
const Contact = () => {
    console.log("Contact Component")
    const accessToken = Cookies.get('jwt_token')
    console.log(accessToken)
    if (accessToken === undefined) {
        return <Redirect to="/login" />
    }
    return (
        <div className="contact-component">
            <Header/>
            <div className="contact-container">
                <h1>Contact</h1>
            </div>

        </div>
    )
}
/* -----> Default Export <----- */
export default Contact
