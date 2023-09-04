

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const ThirdChild = () => {
    console.log("ThirdChild Component")
    return (
        <div className="third-child-component">
            <div className="third-child-container">
               <h1>ThirdChild</h1>
            </div>
        </div>
    )
}

/* -----> Default Export <----- */
export default ThirdChild
