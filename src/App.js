import React from 'react';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import Login from './components/Login/Login';
import './App.css'
// import User from './components/User/User'
import UserRouter from './components/User/UserRouter';

function App() {
  return (
    <>
    <SideBar/>
    {/* <TopBar/> */}
    {/* <Login/> */}
    <UserRouter/>
    </>
  );
}

export default App;
