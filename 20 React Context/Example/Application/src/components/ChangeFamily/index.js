
/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components

/* -----> React Context <----- */
import FamilyContext from "../../context/FamilyContext";

/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

/*
We access the Consumer component using dot notation from the context object.
We will give a callback function as children for Consumer Component.
*/

// class Component
class ChangFamily extends Component{
    // Initialization
    constructor(props) {
        super(props);
        this.state = {activePerson:"ChangeFamily Dynamic React Context"}
    }


    // Updating
    render(){
        console.log("ChangeFamily Component")
        const {activePerson} = this.state

        // Return JSX
        return (
            <FamilyContext.Consumer>
                {value => {
                    const {changePerson} = value
                    const onClickButton = () => {
                        changePerson(activePerson)
                    }

                    return (
                       <button type="button" onClick={onClickButton}>Please Click on Me to ChangePerson</button>
                    )
                }}
            </FamilyContext.Consumer>
        )
    }
}


/* -----> Default Export <----- */
export default ChangFamily
