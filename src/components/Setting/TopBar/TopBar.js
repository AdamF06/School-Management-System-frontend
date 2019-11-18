import React, { Component } from 'react';
import './TopBar.css'
import { Navbar, Nav, Form,FormControl} from 'react-bootstrap'
import {
    Link,
  } from "react-router-dom";

class TopBar extends Component {
    render() { 

        return ( 
            <div className="topbar" >
                <Navbar collapseOnSelect expand="" bg="dark" variant="dark">
                {/* <Navbar.Brand className='float-brand' >React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-0">
                      {/* <Nav.Link href="/user/profile">User</Nav.Link> */}
                      {/* <Nav.Link href="/user/changePassword">ChangePassword</Nav.Link> */}
                      <Nav.Link ><Link to="/setting" id='color-back'>Setting</Link></Nav.Link>
                      {/* <Nav.Link ><Link to="/user/changePassword" id='color-back'>ChangePassword</Link></Nav.Link> */}
                    </Nav>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>

                </Navbar>
            </div>
         );
    }
}
 
export default TopBar;