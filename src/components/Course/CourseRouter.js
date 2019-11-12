import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import CourseNav from "./CourseNav/CourseNav";
import CourseInfo from "./CourseInfo/CourseInfo";
import CourseOutline from "./CourseOutline/CourseOutline";
import Assignment from "./Assignment/Assignment";
import Assessment from "./Assessment/Assessment"
import PlagiarismPolicy from "./PlagiarismPolicy/PlagiarismPolicy";
import FAQ from "./FAQ/FAQ"

export default class CourseRouter extends Component {
    render() {
        return (
            <Router>
                <CourseNav />
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
            </Router>
        );
    }
}
