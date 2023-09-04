/* -----> Third Party Packages <----- */
import {Redirect} from 'react-router-dom'  // Redirect Component is used to redirect to another path

/* -----> import styles <----- */
import './index.css'
import {Component} from "react"; // CSS File


/* -----> Creating Components <----- */

// class Component
class Logout extends Component{
    // Initialization
    constructor(props) {
        super(props);
        this.state = {isButtonClicked:false}
    }

    // Methods
    onLogoutButton = () => {
        console.log("onLogoutButton Event Handler")
        this.setState((prevState) => ({isButtonClicked: !prevState.isButtonClicked}))
    }

    // updating
    render(){
        // state Object destructuring
        const {isButtonClicked} = this.state

        // Return JSX

        if (isButtonClicked){
            return <Redirect to="/login"/>
        }
        return (
            <div className="logout-component">
                <div className="logout-container">
                    <h1>This is Logout Page</h1>
                    <button type="button" className="logout-button" onClick={this.onLogoutButton}>Redirect to Login page</button>
                </div>
            </div>
        )
    }
}

/* -----> Default Export <----- */
export default Logout
