
/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components


/* -----> import External Components <----- */
import GrandParent from './components/GrandParant'
import ChangeFamily from "./components/ChangeFamily";



/* -----> React Context <----- */
import FamilyContext from "./context/FamilyContext";


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Creating Components <----- */

/*
Provider Component updates the value of Context.
When the provider updates context, all the nested consumers of that provider will be re-rendered.
Updated context value can only be accessed by the consumers nested within the provider.
*/

// class Component
class App extends Component{
    // Initialization
    constructor(props) {
        console.log("App Component")
        console.log("constructor")
        super(props);
        this.state = {activePerson:'App Static React Context'}
    }

    // Methods
    onChangePerson = (updatedActivePerson) => {
        this.setState({activePerson:updatedActivePerson})
    }

    // Updating
    render(){
        console.log("render")

        // state object destructuring
        const {activePerson} = this.state

        // Return JSX
        return (
            <FamilyContext.Provider value={{activePerson, changePerson: this.onChangePerson}}>
                <div className="app-component">
                    <div className="app-container">
                        <GrandParent/>
                        <ChangeFamily/>
                    </div>
                </div>
            </FamilyContext.Provider>
        )
    }
}

/* -----> Default Export <----- */
export default App
