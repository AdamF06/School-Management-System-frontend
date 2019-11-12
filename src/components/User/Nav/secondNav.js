import React, {Component} from "react";
import {
  Link
} from "react-router-dom";
import "./secondNav.css"
export default class SecondNav extends Component {
    render(){  
    return (
          <div className="content secondNav user">
              <nav>
              <ul>
                  <li> <Link to="/user">Home</Link></li>
                  <li><Link to="/user/profile">Profile</Link></li>
                  <li><Link to="/user/changePassword">ChangePassword</Link></li>
                  {/* <li><Link to="/user/file">File</Link></li> */}
              </ul>
              </nav>

          </div>
    );
  }
}
