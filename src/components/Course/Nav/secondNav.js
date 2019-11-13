import React, { Component } from "react";
import {
    Link,
} from "react-router-dom";
export default class CourseSecondNav extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/course">Home</Link>
                    </li>
                    <li>
                        <Link to="/course/enroll">Enroll</Link>
                    </li>
                    <li>
                        <Link to="/course/showallcourse">Show all courses</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}