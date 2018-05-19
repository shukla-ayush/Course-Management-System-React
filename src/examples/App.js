import React from 'react';
import HelloWorld from '../hello'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Page1 = () => {
    return(<h2>Page 1</h2>)
};

const Page2 = () => {
    return(<h2>Page 2</h2>)
};

const App = () => {
    return(
        <Router>
            <div>
            <Link to = "/hello">Hello</Link>|
            <Link to = "/page1">Page1</Link>|
            <Link to = "/page1">Page2</Link>
            <Route path='/hello'
                    component={HelloWorld}/>
            <Route path='/page1'
                    component={Page1}/>
            <Route path='/page1'
                    component={Page2}/>
            </div>
        </Router>
    );
};


export default App;