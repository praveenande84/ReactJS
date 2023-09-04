
/* -----> import External Components <----- */
import Welcome from './components/Welcome'


/* -----> Creating Components <----- */

// Functional Component
const App = () => {
    console.log("App Component")

    // Return JSX
    return (
        <div className="app-component">
            <Welcome />
        </div>
    )
}



/* -----> Default Export <----- */
export default App;
