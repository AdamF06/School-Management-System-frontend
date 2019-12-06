import React, { Component } from 'react';
import { Quite } from '../../Icon/Icon';
import { Link } from 'react-router-dom'
import './UserSecondNav.css'
class UserSecondNav extends Component {
    state = {}
    render() {
        const { reset } = this.props
        return (
            <div className="userSecondNav">
                <div className="userSecondNav__top">
                    <div className="iconContainer">
                        <button className="icon" onClick={reset}>
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
                            <Link to="/user/profile" onClick={reset}>Profile</Link>
                        </li>
                        <li>
                            <Link to="/user/changePassword" onClick={reset}>Change Password</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserSecondNav;