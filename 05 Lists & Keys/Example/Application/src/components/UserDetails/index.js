/* -----> import styles <----- */
import './index.css'
import App from "../../App"; // CSS File

/* -----> Creating Components <----- */

// Functional Component
const UserDetails = (props) => {
    console.log(props);
    // Props Object Destructuring
    const {userDetails} = props
    const {name, role} = userDetails;
    return (
        <li className="list-item">
            <h1>{name}</h1>
            <p>{role}</p>
        </li>
    )
}



/* -----> Default Export <----- */
export default UserDetails;
