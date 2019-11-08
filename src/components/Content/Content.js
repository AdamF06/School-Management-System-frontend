// import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';

// import './Content.css'
// class Content extends Component {
//     state = {}
//     render() {
//         return (
//             <div className="content">
//                 <h1>I'm content</h1>
//                 <h2>rest</h2>
//             </div>
//         );
//     }
// }

// export default Content;

import './Content.css'
import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from '../Profile/profile';
import ChangePassword from '../Profile/changePassword';

 export default class Content extends Component {
  render(){  
  return (
    <Router >

        <div className='content'>
        <div>
            <nav>
            {/* <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/profile">Profile</Link>
                </li>
                <li>
                <Link to="/changePassword">ChangePassword</Link>
                </li>
            </ul> */}
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/profile">
                {/* <About /> */}
                <Profile/>
            </Route>
            <Route path="/changePassword">
                <ChangePassword/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
            </Switch>
        </div>
        </div>
        </Router>
  );
}
}
function Home() {
return (
<h2>Home</h2>

);
}

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }