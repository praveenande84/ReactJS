
/* -----> import External Components <----- */
import Header from "../Header";

/* -----> import styles <----- */
import './index.css' // CSS File


/* -----> Creating Components <----- */

// Functional Component
const Contact = () => {
    console.log("Contact Component")
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
