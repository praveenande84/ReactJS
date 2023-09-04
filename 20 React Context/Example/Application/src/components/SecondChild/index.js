

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const SecondChild = () => {
    console.log("SecondChild Component")
    return (
        <div className="second-child-component">
            <div className="second-child-container">
               <h1>SecondChild</h1>
            </div>
        </div>
    )
}

/* -----> Default Export <----- */
export default SecondChild
