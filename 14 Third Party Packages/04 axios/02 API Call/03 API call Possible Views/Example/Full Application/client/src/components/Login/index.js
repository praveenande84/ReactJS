/* -----> Third Party Packages <----- */
import {Component} from 'react'  // Component is for creating class Components
import Cookies from 'js-cookie'  // Cookies is used to store data on client-side with expiry duration.
import {Redirect} from 'react-router-dom'  // Redirect Component is used to redirect to another path
import axios from 'axios'  // API calling


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Set  default configuration of API <----- */
const API = axios.create({
    baseURL: 'http://localhost:5000/',  // Assuming the server is running on port 5000
    headers: {"Content-Type": "application/json"},
});

/* -----> Creating Components <----- */

// class Component
class Login extends Component {
    // Initialization
    constructor(props) {
        super(props);
        this.state =  {
            username: '',
            password: '',
            showSubmitError: false,
            errorMsg: '',
        }
    }

    // Methods
    onChangeUsername = event => {
        const updatedUsername = event.target.value
        this.setState({username: updatedUsername})
    }

    onChangePassword = event => {
        const updatedPassword = event.target.value
        this.setState({password: updatedPassword})
    }

    onSubmitSuccess = jwtToken => {
        console.log("onSubmitSuccess Method")
        const {history} = this.props
        console.log(history)

        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
        })
        history.replace('/')
    }

    onSubmitFailure = errorMsg => {
        console.log("onSubmitFailure Method")
        this.setState({showSubmitError: true, errorMsg})
    }

    submitForm = async event => {
        console.log("submitForm Method")
        event.preventDefault()
        const {username, password} = this.state
        const userDetails = {username, password}

        console.table(userDetails)

        await API.post("/login", userDetails)
            .then((response) => {
                const {data} =  response
                this.onSubmitSuccess(data.jwtToken)
            })
            .catch((error) => {
                console.log(error)
                const {response} = error
                console.log(response)
                this.onSubmitFailure(response.data)
            })
    }

    renderPasswordField = () => {
        const {password} = this.state
        return (
            <>
                <label className="input-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                    type="password"
                    id="password"
                    className="password-input-field"
                    value={password}
                    onChange={this.onChangePassword}
                />
            </>
        )
    }

    renderUsernameField = () => {
        const {username} = this.state
        return (
            <>
                <label className="input-label" htmlFor="username">
                    USERNAME
                </label>
                <input
                    type="text"
                    id="username"
                    className="username-input-field"
                    value={username}
                    onChange={this.onChangeUsername}
                />
            </>
        )
    }

    // Updating
    render() {
        const {showSubmitError, errorMsg} = this.state
        const jwtToken = Cookies.get('jwt_token')

        // username -> praveen1234567 , password -> praveen1234567

        // Return JSX
        if (jwtToken !== undefined) {
            return <Redirect to="/" />
        }
        return (
            <div className="login-form-container">
                <form className="form-container" onSubmit={this.submitForm}>
                    <h1>Login Form</h1>
                    <div className="input-container">{this.renderUsernameField()}</div>
                    <div className="input-container">{this.renderPasswordField()}</div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                </form>
            </div>
        )
    }
}

/* -----> Default Export <----- */
export default Login
