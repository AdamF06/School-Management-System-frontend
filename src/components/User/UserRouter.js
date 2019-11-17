import './UserRouter.css'
import React, { Component } from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Profile from './Profile/profile';
import ChangePassword from './ChangePWD/changePassword';
import File from './File/file';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPortrait} from '@fortawesome/free-solid-svg-icons'
export const Port = <FontAwesomeIcon icon={faPortrait} size="10x" color="black"/>

export default class UserRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/user">
                        <Switch>
                            <Route exact path="/user"> </Route>
                            <Route path="/user/profile"> <Profile /> </Route>
                            <Route path="/user/changePassword"> <ChangePassword /> </Route>
                            <Route path="/user/file"> <File /> </Route>
                        </Switch>
                    </Route>
                </Switch>
            </>
        );
    }
}
