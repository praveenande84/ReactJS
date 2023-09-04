

/* -----> import External Components <----- */
import Header from "../Header";

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const Home = () => {
    console.log("Home Component")
    return (
        <div className="home-component">
            <Header/>
            <div className="home-container">
                <h1>Home</h1>
            </div>

        </div>
    )
}

/* -----> Default Export <----- */
export default Home
