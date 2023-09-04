/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const Home = () => {
    console.log("Home Component")
    return (
        <div className="home-component">
            <h1>Home</h1>
        </div>
    )
}

/* -----> Default Export <----- */
export default Home
