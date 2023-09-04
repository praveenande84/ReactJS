
/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components
import { v4 as uuidv4 } from 'uuid';  // Universally Unique Identifier -> we can generate a unique id

/* -----> import External Components <----- */
import ContactItem from './components/ContactItem'

/* -----> import styles <----- */
import './App.css' // CSS File

/* -----> Dummy Data <----- */
const initialContactsList = [
    {
        id: uuidv4(),  // UUID package provides uuidv4(), which returns a unique id whenever it is called.
        name: 'Ram',
        mobileNo: 9999988888,
        isFavorite: false,
    },
    {
        id: uuidv4(),
        name: 'Pavan',
        mobileNo: 8888866666,
        isFavorite: true,
    },
    {
        id: uuidv4(),
        name: 'Nikhil',
        mobileNo: 9999955555,
        isFavorite: false,
    },
]



/* -----> Creating Components <----- */

// class Component
class App extends Component{
    // Initialization
    constructor(props) {
        console.log("App Component")
        console.log("constructor")
        super(props);
        this.state = {
            contactsList: initialContactsList,
            name: '',
            mobileNo: '',
        }
    }

    // Methods
    toggleIsFavorite = id => {
        console.log("toggleIsFavorite Method")
        const {contactsList} = this.state
        const updatedContactsList = contactsList.map(eachContact => {
            if (id === eachContact.id) {
                return {...eachContact, isFavorite: !eachContact.isFavorite}
            }
            return eachContact
        })

        this.setState({contactsList: updatedContactsList})
    }

    onAddContact = event => {
        console.log("onAddContact Method")
        event.preventDefault()
        const {name, mobileNo, contactsList} = this.state
        const newContact = {
            id: uuidv4(),
            name,
            mobileNo,
            isFavorite: false,
        }

        const updatedContactsList = [...contactsList, newContact]
        console.table(updatedContactsList)

        this.setState(prevState => ({
            contactsList: updatedContactsList,
            name: '',
            mobileNo: '',
        }))
    }

    onChangeMobileNo = event => {
        console.log("onChangeMobileNo Method")
        const updatedMobileNo = event.target.value
        console.log(updatedMobileNo)
        this.setState({mobileNo: updatedMobileNo})
    }

    onChangeName = event => {
        console.log("onChangeName Method")
        const updatedName = event.target.value
        console.log(updatedName)
        this.setState({name: updatedName})
    }


    // Updating
    render(){
        console.log("render")

        // state object destructuring
        const {name, mobileNo, contactsList} = this.state

        // Return JSX
        return (
            <div className="app-container">
                <div className="responsive-container">
                    <h1 className="heading">Contacts</h1>
                    <form className="contact-form-container" onSubmit={this.onAddContact}>
                        <input
                            value={name}
                            onChange={this.onChangeName}
                            className="input"
                            placeholder="Name"
                        />
                        <input
                            className="input"
                            value={mobileNo}
                            onChange={this.onChangeMobileNo}
                            placeholder="Mobile Number"
                        />
                        <button type="submit" className="button">
                            Add Contact
                        </button>
                    </form>
                    <ul className="contacts-table">
                        <li className="table-header">
                            <p className="table-header-cell name-column">Name</p>
                            <hr className="separator" />
                            <p className="table-header-cell">Mobile Number</p>
                        </li>
                        {contactsList.map(eachContact => (
                            <ContactItem
                                key={eachContact.id}
                                contactDetails={eachContact}
                                toggleIsFavorite={this.toggleIsFavorite}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}



/* -----> Default Export <----- */
export default App;
