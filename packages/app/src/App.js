import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'reactstrap'
import './app.css'

const App = () => {

    // module federation
    // fazendo lazy load
    const HomePage = React.lazy(() => import("HomeApp/HomePage"))
    const ContactPage = React.lazy(() => import("ContactApp/ContactPage"))

    return (
        <Router>
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contant">Home</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Suspense fallback={<div>Loading...</div>}>
                            <HomePage></HomePage>
                        </Suspense>
                    </Route>
                    <Route exact path="/">
                        <Suspense fallback={<div>Loading...</div>}>
                            <ContactPage></ContactPage>
                        </Suspense>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App