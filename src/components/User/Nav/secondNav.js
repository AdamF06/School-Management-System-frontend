import React, {Component} from "react";
import {
  Link,
} from "react-router-dom";
import "../user.css"
export default class SecondNav extends Component {
  
    render(){ 
    return (
          <div className="content">
              <nav>
              <ul>
                  <li>
                  <Link to="/user">Home</Link>
                  </li>
                  <li>
                  <Link to="/user/profile">Profile</Link>
                  </li>
                  <li>
                  <Link to="/user/changePassword">ChangePassword</Link>
                  </li>
              </ul>
              </nav>

          </div>
    );
  }
}
