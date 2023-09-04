/* -----> import styles <----- */
import './index.css' // CSS File

/* -----> Creating Components <----- */

// Functional Component
const SignUp = () => {
    console.log("SignUp Component")
    return (
        <div className="signup-component">
            <div className="signup-container">
                <h1>SignUp</h1>
            </div>

        </div>
    )
}

/* -----> Default Export <----- */
export default SignUp
