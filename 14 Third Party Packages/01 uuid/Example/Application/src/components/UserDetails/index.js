/* -----> import styles <----- */
import './index.css'  //  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const UserDetails = (props) => {
    console.log("UserDetails Component")
    console.log(props);
    // Props Object Destructuring
    const {userDetails} = props
    const {name, role, uniqueNo} = userDetails;
    console.log(uniqueNo)
    return (
        <li className="list-item">
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{uniqueNo}</p>
        </li>
    )
}



/* -----> Default Export <----- */
export default UserDetails;
