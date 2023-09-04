/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

// class Component
class Card extends Component{
    // Updating
    render(){
        console.log(this.props);
        // Props Object Destructuring
        const {message} = this.props

        // Return JSX
        return (
            <div className="card-component">
                <h1 className="heading">{message}</h1>
            </div>
        )
    }
}




/* -----> Default Export <----- */
export default Card;
