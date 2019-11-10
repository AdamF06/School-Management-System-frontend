import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import CourseMenu from "./CourseMenu";
import CourseInfo from "./CourseInfo";
import CourseOutline from "./CourseOutline";
import Assignment from "./Assignment";
import Assessment from "./Assessment"
import PlagiarismPolicy from "./PlagiarismPolicy";
import FAQ from "./FAQ"

export default class CourseRouter extends Component {
    render() {
        return (
            <Router>
                <CourseMenu />
                <Switch>
                    <Route path="/courseinfo">
                        <Switch>
                            <Route exact path="/courseinfo">
                                <CourseInfo />                                
                            </Route>
                            <Route exact path="/courseoutline">
                                <CourseOutline />                                                                
                            </Route>
                            <Route exact path="/assignment">
                                <Assignment />                                
                            </Route>
                            <Route exact path="/assessment">
                                <Assessment />                                                                
                            </Route>
                            <Route exact path="/plagiarismpolicy">
                                <PlagiarismPolicy />                                                                
                            </Route>
                            <Route exact path="/FAQ">
                                <FAQ />                                                                
                            </Route>

                        </Switch>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
