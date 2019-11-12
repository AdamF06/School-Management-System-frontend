import './user.css'
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Profile from './Profile/profile';
import ChangePassword from './ChangePWD/changePassword';
export default class UserRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/user">
                        <Switch>
                            <Route exact path="/user">
                            </Route>
                            <Route path="/user/profile">
                                <Profile />
                            </Route>
                            <Route path="/user/changePassword">
                                <ChangePassword />
                            </Route>
                        </Switch>
                    </Route>
                </Switch>
            </>
        );
    }
}
