/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// class Component
class Counter extends Component{
    // Initialization
    constructor(props){
        console.log("constructor")
        super(props)
        // The state is a JS object in which we store the component's data that changes over time.
        this.state = {count:0}  // When the state object changes, the component re-renders.
    }

    // Methods

    // We can update the state by using setState().
    //  We can provide function/object as an argument to set the state.

    onDecrement = () => {
        console.log("onDecrement Method")
		// updating state
        this.setState((prevState) => ({count:prevState.count-1}))  // Function as an argument
    }

    onIncrement = () => {
        console.log("onIncrement Method")
        // updating state
        this.setState((prevState) => ({count:prevState.count+1}))  // Function as an argument
    }

    onReset = () => {
        console.log("onReset Method")
		// updating state
        this.setState( {count:0})  // Object as an argument
    }

    // Updating
    render(){
        console.log("render")
        // state object destructuring
        const {count} = this.state

        // Return JSX
        return (
            <div className="card-component">
                <p>Click on Buttons and observe count value</p>
                <div className="counter-container">
                    <button onClick={this.onDecrement} type="button">Decrease</button>
                    <span className="count">{count}</span>
                    <button onClick={this.onIncrement} type="button">Increase</button>
                </div>
                <button onClick={this.onReset} type="button">Reset</button>

            </div>
        )
    }
}


/* -----> Default Export <----- */
export default Counter;
