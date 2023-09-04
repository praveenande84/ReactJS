

/* -----> import External Components <----- */
import VideoPlayer from './components/VideoPlayer'


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const App = () => {
    console.log("App Component")
    return (
        <div className="app-component">
            <div className="app-container">
                <VideoPlayer/>
            </div>
        </div>
    )
}

/* -----> Default Export <----- */
export default App
