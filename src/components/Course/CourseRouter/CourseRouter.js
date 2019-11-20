import React, { Component } from "react";
import {
    // BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default class CourseRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/course'>
                    <Switch>
                        <Route exact path="/course"> ***main***</Route>
                        <Route path="/course/assignment"> ***assignment*** </Route>
                        <Route path="/course/mark"> ***mark*** </Route>
                        {/* <Route path="/user/file"> <File /> </Route> */}
                    </Switch>
                </Route>
            </Switch>
        );
    }
}
