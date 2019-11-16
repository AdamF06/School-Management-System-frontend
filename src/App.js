import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css'

import Login from './components/Login/Login';
import SideBar from './components/PrimaryNav/PrimaryNav';
import UserRouter from './components/User/UserRouter';
import Dasboard from './components/Dashboard/Dashboard'
import CourseRouter from './components/Course/CourseRouter'
import { createBrowserHistory } from "history";
import PrivateRoute from './PrivateRoute'
const customHistory = createBrowserHistory();

// import PrivateRoute from './PrivateRoute'
function App() {
  return (
    <>
      <Router history={customHistory}>
        <Switch>
          {/* <Route exact path="/"> <Login /></Route> */}
          <Route exact path="/"> <SideBar/> <Dasboard/> </Route>

          <PrivateRoute path='/dashboard'> <SideBar/> <Dasboard/> </PrivateRoute>
          <Route path ="/course"><SideBar/> <CourseRouter /></Route>
          <PrivateRoute path="/user"><SideBar/> <UserRouter /></PrivateRoute>
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </>
  );
}
function mapStateToProps(state) {
  const { student } = state;
  return {
      _id:student._id,
      identity: student.identity,
      status: student.status
  };
}
export default connect(mapStateToProps, {})(App);
