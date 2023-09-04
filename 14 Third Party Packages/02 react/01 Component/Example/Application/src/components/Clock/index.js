/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// class Component
class Clock extends Component {
    constructor(props) {
        console.log("Clock Component")
        console.log("constructor")
        super(props)
        this.state = { date: new Date() }
    }

    // Mounting
    componentDidMount() {
        console.log("componentDidMount")
        this.timerID = setInterval(this.tick, 1000)
    }

    // Unmounting
    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(this.timerID)
    }

    // Methods
    tick = () => {
        console.log("tick Method")
        this.setState({
            date: new Date()
        })
    }

    // Updating
    render() {
        console.log("render")
        const { date } = this.state
        return (
            <div className="clock-container">
                <h1 className="heading">Clock</h1>
                <p className="time">{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

/* -----> Default Export <----- */
export default Clock