import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";
export default class UserSecondNav extends Component {
  
  render() {
    return (
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
    );
  }
}
