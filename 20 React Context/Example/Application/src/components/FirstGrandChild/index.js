
/* -----> React Context <----- */
import FamilyContext from "../../context/FamilyContext";

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

/*
We access the Consumer component using dot notation from the context object.
We will give a callback function as children for Consumer Component.
*/

// Functional Component
const FirstGrandChild = () => {
    console.log("FirstGrandChild")
    return (
        <FamilyContext.Consumer>
            {value => {
                const {activePerson, changePerson} = value
                return (
                    <h1>{activePerson}</h1>
                )
            }}
        </FamilyContext.Consumer>
    )
}


/* -----> Default Export <----- */
export default FirstGrandChild
