

/* -----> import styles <----- */
import './index.css' // CSS File


/* -----> Creating Components <----- */

// Functional Component
const About = () => {
    console.log("About Component")
    return (
        <div className="about-component">
            <h1>About</h1>
        </div>
    )
}

/* -----> Default Export <----- */
export default About
