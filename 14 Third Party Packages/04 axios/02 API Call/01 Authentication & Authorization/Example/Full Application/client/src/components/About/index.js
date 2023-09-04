/* -----> Third Party Packages <----- */
import Cookies from 'js-cookie'  // Cookies is used to store data on client-side with expiry duration.
import {Redirect} from 'react-router-dom'  // Redirect Component is used to redirect to another path


/* -----> import External Components <----- */
import Header from "../Header";

/* -----> import styles <----- */
import './index.css' // CSS File


/* -----> Creating Components <----- */

// Functional Component
const About = () => {
    console.log("About Component")
    const accessToken = Cookies.get('jwt_token')
    console.log(accessToken)
    if (accessToken === undefined) {
        return <Redirect to="/login" />
    }
    return (
        <div className="about-component">
            <Header/>
            <div className="about-container">
                <h1>About</h1>
            </div>

        </div>
    )
}

/* -----> Default Export <----- */
export default About
