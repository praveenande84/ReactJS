

/* -----> import External Components <----- */
import Card from './components/Card'

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const App = () => {
    console.log("App Component")
    return (
        <div className="app-component">
            <div className="app-container">
                <Card/>
            </div>
        </div>
    )
}



/* -----> Default Export <----- */
export default App
