import React, { Component } from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Setting from './setting';
import TopBar from './TopBar/TopBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPortrait} from '@fortawesome/free-solid-svg-icons'
export const Port = <FontAwesomeIcon icon={faPortrait} size="10x" color="black"/>
export default class SettingRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/setting">
                       <TopBar/>
                       <Setting/>
                        <Switch>
                            <Route exact path="/setting">
                            </Route>
                            {/* <Route path="/user/profile">
                                <Profile />
                            </Route>
                            <Route path="/user/changePassword">
                                <ChangePassword />
                            </Route>
                            <Route path="/user/file">
                                <File />
                            </Route> */}
                        </Switch>
                    </Route>
                </Switch>
            </>
        );
    }
}