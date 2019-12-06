import './UserRouter.css'
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Profile from './Profile/profile';
import ChangePassword from './ChangePWD/changePassword';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait } from '@fortawesome/free-solid-svg-icons'
export const Port = <FontAwesomeIcon icon={faPortrait} size="10x" color="black" />

export default class UserRouter extends Component {
    render() {
        return (
            <>
                <Route path="/user/profile"> <Profile /> </Route>
                <Route path="/user/changePassword"> <ChangePassword /> </Route>
            </>
        );
    }
}
