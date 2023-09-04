/* -----> Third Party Packages <----- */
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'  // routing Components

/* -----> import External Components <----- */
import SignUp from './components/SignUp'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'


/* -----> import styles <----- */
import './App.css'  // CSS File


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
                <Header />
                <div className="app-body">
                    <Switch>
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
)

/* -----> Default Export <----- */
export default App
