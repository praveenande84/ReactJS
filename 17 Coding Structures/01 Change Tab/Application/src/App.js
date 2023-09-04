
/* -----> import External Components <----- */
import TabsList from './components/TabsList'


/* -----> Creating Components <----- */

// Functional Component
const App = () => {
    console.log("App Component")

    // Return JSX
    return (
        <div className="app-component">
            <TabsList />
        </div>
    )
}



/* -----> Default Export <----- */
export default App;
