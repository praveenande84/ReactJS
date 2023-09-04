/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// class Component

class Welcome extends Component{
    // Initialization
    constructor(props){
        console.log("constructor")
        super(props)
        this.state = {message:''}
    }

    // Methods
    onTextBox = (event) => {
        console.log("onTextBox Method")
		// input element gives event object
        const updatedMessage = event.target.value;
        console.log(updatedMessage)
        this.setState({message:updatedMessage})
    }

    // updating
    render(){
        console.log("render")

        // destructuring state object
        const {message} = this.state

        // Return JSX
		// If the Input Element value is handled by a React State then it is called Controlled Input.
        return(
            <div className="welcome-component">
                <h1 className="counting">{message}</h1>
                <input type="text" className="message" onChange={this.onTextBox} placeholder="Enter Message Here" value={message}/>
            </div>

        )
    }
}



/* -----> Default Export <----- */
export default Welcome;
