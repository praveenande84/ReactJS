/* -----> Third Party Packages <----- */
import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'  // routing Components

/* -----> import External Components <----- */
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import ProtectedRoute from "./components/ProtectedRoute";

/*
 To add routing wrapping all the components with BrowserRouter.
 The Switch Component will only render's the first route that matches the path. If no path matches, it renders the NotFound component.
 The Route Component renders specific UI component when path matches current URL => exact keyword renders the route if path matches exactly the current url.
 Redirect Component is used to redirect to another path
*/

/* -----> Creating Components <----- */

// Functional Component
const App = () => (
    <BrowserRouter>
        <div className="app-container">
            <div className="responsive-container">
                <div className="app-body">
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <ProtectedRoute exact path="/signup" component={SignUp} />
                        <ProtectedRoute exact path="/" component={Home} />
                        <ProtectedRoute exact path="/about" component={About} />
                        <ProtectedRoute exact path="/contact" component={Contact} />
                        <Route exact path="/not-found" component={NotFound} />
                        <Redirect to="not-found"/>
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
)

/* -----> Default Export <----- */
export default App
