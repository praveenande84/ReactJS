/* -----> Third Party Packages <----- */
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'  // routing Components

/* -----> import External Components <----- */

import Login from './components/Login'
import Logout from './components/Logout'
import NotFound from './components/NotFound'



/*
 To add routing wrapping all the components with BrowserRouter.
 The Switch Component will only render's the first route that matches the path. If no path matches, it renders the NotFound component.
 The Route Component renders specific UI component when path matches current URL => exact keyword renders the route if path matches exactly the current url.
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
                        <Route exact path="/logout" component={Logout} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
)

/* -----> Default Export <----- */
export default App
