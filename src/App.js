import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Login from './components/Login/Login';
import './App.css'
import TopBar from './components/TopBar/TopBar';
import Content from './components/Content/Content';

function App() {
  return (
    <>
    <SideBar/>
    <TopBar/>
    <Content/>
    </>
  );
}

export default App;
