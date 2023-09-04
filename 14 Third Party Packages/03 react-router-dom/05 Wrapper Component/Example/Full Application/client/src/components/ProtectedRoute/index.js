
/* -----> Third Party Packages <----- */
import { Route, Redirect } from "react-router-dom";  // // routing Components
import Cookies from 'js-cookie'  // Cookies is used to store data on client-side with expiry duration.

/* -----> Creating Components <----- */

/*
The Route Component renders specific UI component when path matches current URL => exact keyword renders the route if path matches exactly the current url.
Redirect Component is used to redirect to another path
*/

// Functional Component

/*
  Redirection Logic can be reused by separating out into a React Component called Wrapper Component. Each route will be wrapped with it.
*/
// ProtectedRoute is the Wrapper Component
const ProtectedRoute = (props) => {
    console.log("protectedRoute Wrapper Component")
    console.log(props)
    const token = Cookies.get("jwt_token");
    if (token === undefined) {
        return <Redirect to="/login" />;
    }
    return <Route {...props} />;
};

/* -----> Default Export <----- */
export default ProtectedRoute;