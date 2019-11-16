import React, { Component } from "react";
import {
    Link,
} from "react-router-dom";
export default class CourseSecondNav extends Component {
    constructor() {
        super()
        this.state = {
            activeNav: "home"
        }
    }
    switchNav = () => {

    }
    render() {
        const {activeNav} = this.state
        return (
            <nav className="courseNav">
                <ul>
                    <li  className={activeNav === 'home' ? 'li--active' : null}>
                        <Link to="/course"
                            id="home"
                            onClick={this.switchNav()}>Home</Link>
                    </li>
                    <li className={activeNav === 'assignments' ? 'li--active' : null}>
                        <Link to="/course/assignments"
                            id="assignments"
                            onClick={this.switchNav()}
                        >Assignments</Link>
                    </li>
                    <li className={activeNav === 'marks' ? 'li--active' : null}>
                        <Link to="/course/marks"
                            id="marks"
                            onClick={this.switchNav()}
                        >Marks</Link>
                    </li>
                    <li  className={activeNav === 'modules' ? 'li--active' : null}>
                        <Link to="/course/modules"
                            id="modules"
                            onClick={this.switchNav()}
                        >Modules</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}