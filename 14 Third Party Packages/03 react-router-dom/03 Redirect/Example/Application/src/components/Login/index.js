/* -----> Third Party Packages <----- */
import {Component} from 'react'  // Component is for creating class Components
import {Redirect} from 'react-router-dom'  // Redirect Component is used to redirect to another path

/* -----> import styles <----- */
import './index.css' // CSS File


/* -----> Creating Components <----- */

// class Component
class Login extends Component{
    // Initialization
    constructor(props) {
        super(props);
        this.state = {isButtonClicked:false}
    }


    // Methods
    onLoginButton = () => {
        console.log("onLoginButton Event Handler")
        this.setState((prevState) => ({isButtonClicked: !prevState.isButtonClicked}))
    }

    // updating
    render(){
        // state Object destructuring
        const {isButtonClicked} = this.state

        // Return JSX

        if (isButtonClicked){
            return <Redirect to="/logout"/>
        }
        return (
            <div className="login-component">
                <div className="login-container">
                    <h1>This is Login Page</h1>
                    <button type="button" className="login-button" onClick={this.onLoginButton}>Redirect to Logout page</button>
                </div>
            </div>
        )
    }
}



/* -----> Default Export <----- */
export default Login
