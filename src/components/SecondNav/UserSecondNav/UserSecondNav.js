import React, { Component } from 'react';
import { Quite } from '../../Icon/Icon';
import {Link} from 'react-router-dom'
import './UserSecondNav.css'
class UserSecondNav extends Component {
    state = {}
    render() {
        return (
            <div className="userSecondNav">
                <div className="userSecondNav__top">
                    <div className="iconContainer">
                        <button className="icon">
                            {Quite}
                        </button>
                    </div>
                    <div className="userSecondNav__top__image">
                        <h3>S N</h3>
                    </div>
                    <h1 className="top__studentName">Student Name</h1>
                    <button className="userSecondNav__top__signout"><span> Sign out</span></button>
                </div>

                <div className="userSecondNav__body">
                    <ul>
                        <li>
                        <Link to="/user/profile">Profile</Link>
                        </li>
                        <li>
                        <Link to="/course">Change Password</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserSecondNav;