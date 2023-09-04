
/* -----> import External Components <----- */
import FirstGrandChild from '../FirstGrandChild'

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const FirstChild = () => {
    console.log("FirstChild Component")
    return (
        <div className="first-child-component">
            <div className="first-child-container">
               <h1>FirstChild</h1>
                <FirstGrandChild/>
            </div>
        </div>
    )
}

/* -----> Default Export <----- */
export default FirstChild
