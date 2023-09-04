
/* -----> Third Party Packages <----- */
import { v4 as uuidv4 } from 'uuid';  // Universally Unique Identifier -> we can generate a unique id

/* -----> import External Components <----- */
import UserDetails from './components/UserDetails'

/* -----> import styles <----- */
import './App.css' // CSS File

/* -----> Dummy Data <----- */
const userDetailsList = [
    {
        uniqueNo: uuidv4(),  // UUID package provides uuidv4(), which returns a unique id whenever it is called.
        name: 'Ande Praveen',
        role: 'Future Developer'

    },
    {
        uniqueNo: uuidv4(),
        name: 'Mark Zuckerberg',
        role: 'Facebook'

    },
    {
        uniqueNo: uuidv4(),
        name: 'Brendan Eich',
        role: 'Javascript'

    },
    {
        uniqueNo: uuidv4(),
        name: 'Guido van Rossum',
        role: 'Python'
    }
]

console.log(userDetailsList)

/* -----> Creating Components <----- */


// Functional Component
const App = () => {
    console.log("App Component")
   return (
       <div className="app-component">
        <ul className="users-list">
            {userDetailsList.map((eachUser) => <UserDetails key={eachUser.uniqueNo} userDetails={eachUser}/>)}
        </ul>
    </div>
   )

}

/* -----> Default Export <----- */
export default App;
