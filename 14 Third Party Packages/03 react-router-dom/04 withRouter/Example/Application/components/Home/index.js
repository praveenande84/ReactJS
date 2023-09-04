/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const Home = (props) => {
    console.log("Home Component")
	// This Component rendered by the Route, So this Component get some additional props objects
    console.log(props)
	
	// additional props objects
    const {history, location, match} = props
    console.log(history)
    console.log(location)
    console.log(match)  // The match object contains the information about the path from which the component is rendered.
    return (
        <div className="home-component">
            <h1>Home</h1>
        </div>
    )
}

/* -----> Default Export <----- */
export default Home
