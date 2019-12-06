import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Quite } from '../../Icon/Icon';
import './CourseSecondNav.css'

class CourseSecondNav extends Component {

    render() {
        const { reset } = this.props
        return (
            <div className="courseSecondNav">
                <div className="courseSecondNav__header">
                    <h1>Courses</h1>

                    <button onClick={reset}>
                        {Quite}
                    </button>
                </div>
                <div className="courseSecondNav__linkList">
                    <ul>
                        <li>
                            <Link to="/course" onClick={reset}>Course 1</Link>
                        </li>
                        <li>
                            <Link to="/course/all" onClick={reset}>All Courses</Link>
                        </li>
                    </ul>
                </div>
                <p>
                    Welcome to your courses! To customise the list of courses,
                    click on the "All Courses" link and star the courses to display.
                </p>
            </div>
        );
    }
}

export default CourseSecondNav;