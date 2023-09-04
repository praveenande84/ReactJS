
/* -----> import External Components <----- */
import Header from "../Header";

/* -----> import styles <----- */
import './index.css' // CSS File


/* -----> Creating Components <----- */

// Functional Component
const About = () => {
    console.log("About Component")
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
