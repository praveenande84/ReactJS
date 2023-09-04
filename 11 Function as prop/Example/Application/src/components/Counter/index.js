
/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const Counter = (props) => {
    console.log("Counter Component")
    const {onIncrement, count} = props

    const onButtonClick = () => {
        console.log("Button Clicked")
        onIncrement()
    }

    // return JSX
    return(
        <div className="welcome-component">
            <h1 className="counting">{count}</h1>
            <p>Click on Button and observe browser</p>
            <button type="button" onClick={onButtonClick}>Increase Count</button>
        </div>

    )
}


/* -----> Default Export <----- */
export default Counter;
