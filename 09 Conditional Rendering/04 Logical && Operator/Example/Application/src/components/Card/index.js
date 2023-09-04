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


    // Updating
    render(){
        console.log("render")
        const {isLoggedIn} = this.state  // state object destructuring
        console.log(isLoggedIn)

        // Return JSX
        return (
            <div className="card-component">
                <div>
                    {/*Logical && Operator*/}
                    {isLoggedIn && <button type="button">Logout</button>}
                    {!isLoggedIn && <button type="button">Logout</button>}
                </div>
            </div>

        )
    }
}


/* -----> Default Export <----- */
export default Card;
