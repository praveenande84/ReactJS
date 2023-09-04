
/* -----> import External Components <----- */
import Welcome from './components/Welcome'

/* -----> Creating Components <----- */

// Functional Component
const App = () => (
    <div className="app-component">
        <Welcome greeting="Hello" />
    </div>
);

/* -----> Default Export <----- */
export default App;
