/* -----> import styles <----- */
import './index.css' // CSS File


/* -----> Creating Components <----- */

// Functional Component
const NotFound = () => {
    console.log("NotFound Component")

    return (
        <div className="not-found-component">
            <div className="not-found-container">
                <p>Change Browser path to 'login' or 'logout'</p>
            </div>
        </div>
    )
}

/* -----> Default Export <----- */
export default NotFound
