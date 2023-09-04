/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
// These are JavaScript functions that take props as a parameter if necessary and return react element (JSX).
const Card = (props) => {
    console.log(props);

    // Props Object Destructuring
    const {message} = props

    // Return JSX
    return (
        <div className="card-component">
            <h1 className="heading">{message}</h1>
        </div>
    )
};



/* -----> Default Export <----- */
export default Card;
