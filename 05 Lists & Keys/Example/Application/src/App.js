
/* -----> import External Components <----- */
import UserDetails from './components/UserDetails'

/* -----> import styles <----- */
import './App.css' // CSS File

/* -----> Dummy Data <----- */
const userDetailsList = [
    {
        uniqueNo: 1,
        name: 'Ande Praveen',
        role: 'Future Developer'

    },
    {
        uniqueNo: 2,
        name: 'Mark Zuckerberg',
        role: 'Facebook'

    },
    {
        uniqueNo: 3,
        name: 'Brendan Eich',
        role: 'Javascript'

    },
    {
        uniqueNo: 4,
        name: 'Guido van Rossum',
        role: 'Python'
    }
]


/* -----> Creating Components <----- */

// Keys help React to identify which items have changed, added, or removed. They should be given to the elements inside the array for a stable identity.
// Keys used within arrays should be unique among their siblings. However, they don't need to be unique in the entire application.

// Functional Component
const App = () => (
    <div className="app-component">
        <ul className="users-list">
            {userDetailsList.map((eachUser) => <UserDetails key={eachUser.uniqueNo} userDetails={eachUser}/>)}
        </ul>
    </div>

)

/* -----> Default Export <----- */
export default App;
