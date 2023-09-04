
/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const Welcome = (props) => {
    console.log("Welcome Component")
    const {greeting, name} = props

    // return JSX
    return(
        <div className="welcome-component">
            <h1 className="message">
                {greeting}, {name}
            </h1>
        </div>

    )
}

/* -----> Default Props <----- */
// defaultProps is a property in React Component used to set default values for the props.
Welcome.defaultProps = {
    name: "Rahul",
    greeting: "Hi"
};


/* -----> Default Export <----- */
export default Welcome;
