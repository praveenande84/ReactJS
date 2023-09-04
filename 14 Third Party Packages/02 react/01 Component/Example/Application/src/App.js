/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components

/* -----> import External Components <----- */
import Clock from './components/Clock'

/* -----> import styles <----- */
import './App.css'  // CSS File


/* -----> Creating Components <----- */

// class Component
class App extends Component {
    constructor(props) {
        console.log("App Component")
        console.log("constructor")
        super(props);
        this.state = {
            showClock: false
        }
    }

    // Methods
    onToggleClock = () => {
        console.log("onToggleClock Method")
        this.setState( prevState => {
            const { showClock } = prevState
            return {
                showClock: !showClock
            }
        })
    }

    // Updating
    render() {
        console.log("render")

        // state object destructuring
        const { showClock } = this.state

        // Return JSX
        return (
            <div className="app-container">
                <button onClick={ this.onToggleClock } type="button" className="toggle-button">
                    {showClock ? 'Show Clock' : 'Hide Clock'}
                </button>
                {showClock && <Clock />}
            </div>
        )
    }
}

/* -----> Default Export <----- */
export default App;
