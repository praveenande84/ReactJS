
/* -----> Third Party Packages <----- */
import {useState} from 'react'


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

/*
React Hooks:
useState() -> Add State to Functional Component => const [currentState, setterFun] = useState(initialValue)
*/

// Functional Component
const Card = () => {
    console.log("Card Component")

    // State Initialization
     const [isLogin, setIsLogin] = useState(false)

    // Methods
    const onButtonClick = () => {
        setIsLogin((prevState) => !prevState)
    }

    const buttonText = isLogin ? "Logout" : "Login"
	
	// Return JSX
    return (
        <div className="card-component">
            <div className="card-container">
                <button type="button" className="button" onClick={onButtonClick}>{buttonText}</button>
            </div>
        </div>
    )
}



/* -----> Default Export <----- */
export default Card
