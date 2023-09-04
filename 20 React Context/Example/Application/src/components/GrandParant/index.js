

/* -----> import External Components <----- */
import Parent from '../Parent'


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const GrandParent = () => {
    console.log("GrandParent Component")
    return (
        <div className="grand-parent-component">
            <div className="grand-parent-container">
                <Parent/>
            </div>
        </div>
    )
}

/* -----> Default Export <----- */
export default GrandParent
