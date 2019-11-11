import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css'

import Login from './components/Login/Login';
import SideBar from './components/SideBar/SideBar';
import UserRouter from './components/User/UserRouter';
// import PrivateRoute from './PrivateRoute'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"> <Login /></Route>
          <Route path ="/user"><SideBar/> <UserRouter /></Route>
          {/* <PrivateRoute path="/user"><SideBar/> <UserRouter /> </PrivateRoute> */}
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </>
  );
}
function mapStateToProps(state) {
  const { user } = state;
  return {
      identity: user.identity,
      status: user.status
  };
}
export default connect(mapStateToProps, {})(App);
