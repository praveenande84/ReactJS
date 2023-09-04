
/* -----> Third Party Packages <----- */
import {useState, useEffect} from 'react'


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

/*
React Hooks:
useState() -> Add State to Functional Component => const [currentState, setterFun] = useState(initialValue)
useContext() => Access the Context value => useEffect(effect);
*/

// Functional Component
const Card = () => {
    console.log("Card Component")

    // State Initialization
     const [score, setScore] = useState(0)

    // Methods
    const onChangeScore = () => {
        console.log("onChangeScore Callback Function")
        document.title = `Score: ${score}`
    }

    // Mounting
    useEffect(onChangeScore)



    // Return JSX
    return (
        <div className="card-component">
            <div className="card-container">
                <h1 className="heading">{score}</h1>
            </div>
        </div>
    )
}



/* -----> Default Export <----- */
export default Card
