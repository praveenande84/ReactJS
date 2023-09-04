/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components

/* -----> import External Components <----- */
import Counter from './components/Counter'

/* -----> Creating Components <----- */

// class Component
class App extends Component{
    // Initialization
    constructor(props){
        console.log("constructor")
        super(props)
        this.state = {count:0}
    }

    // Methods
    onIncrement = () => {
        console.log("onIncrement Method")
        this.setState((prevState) => ({count:prevState.count+1}))
    }

    // updating
    render(){
        console.log("render")
        // state object destructuring
        const {count} = this.state

        // Return JSX
        // We can pass functions as props to child components.
        return (
            <div className="app-component">
                <Counter count={count} onIncrement={this.onIncrement}/>
            </div>
        )
    }
}


/* -----> Default Export <----- */
export default App;
