import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import ShoppingDetails from './Components/ShoppingDetails';

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={Home} />
                <Route path="/details" exact strict component={ShoppingDetails} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
