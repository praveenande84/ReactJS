

/* -----> import External Components <----- */
import FirstChild from '../FirstChild'
import SecondChild from '../SecondChild'
import ThirdChild from '../ThirdChild'


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const Parent = () => {
    console.log("Parent Component")
    return (
        <div className="parent-component">
            <div className="parent-container">
                <FirstChild/>
                <SecondChild/>
                <ThirdChild/>
            </div>
        </div>
    )
}

/* -----> Default Export <----- */
export default Parent
