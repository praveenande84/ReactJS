/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// class Component
class Card extends Component{

    // Methods
    // Providing Arrow Functions To not change the context of this , we have to pass an arrow function to the event.
    onButtonClick = () => {
        console.log("clicked")
    }

    // Updating
    render(){

        // Return JSX
        return (
            <div className="card-component">
                <p>Click on Button and see on console</p>
                <button onClick={this.onButtonClick} type="button">Button</button>
            </div>
        )
    }
}




/* -----> Default Export <----- */
export default Card;
