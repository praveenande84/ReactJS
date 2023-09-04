/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// class Component
class Card extends Component{
    // Initialization
    constructor(props){
        console.log("constructor")
        super(props)
        this.state = { isLoggedIn: true}  // When the state object changes, the component re-renders.
    }

    // Methods
    renderAuthenticationButton = () => {
        console.log("renderAuthentication Method")
        const {isLoggedIn} = this.state  // state object destructuring
		// If-Else statement
        if (isLoggedIn === true) {
            return <button type="button">Logout</button>
        }
        return <button type="button">Login</button>
    }

    // Updating
    render(){
        console.log("render")

        // Return JSX
        return (
            <div className="card-component">
                <div>
                    {this.renderAuthenticationButton()}
                </div>
            </div>

        )
    }
}


/* -----> Default Export <----- */
export default Card;
