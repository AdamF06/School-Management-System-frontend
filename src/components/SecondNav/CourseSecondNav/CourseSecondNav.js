import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Quite } from '../../Icon/Icon';
import './CourseSecondNav.css'

class CourseSecondNav extends Component {

    render() {
        return (
            <div className="courseSecondNav">
                <div className="courseSecondNav__header">
                    <h1>Courses</h1>
                    
                    <button>
                        {Quite}
                    </button>
                </div>
                <div className="courseSecondNav__linkList">
                    <ul>
                        <li>
                            <Link to="/course/:id">Course 1</Link>
                        </li>
                        <li>
                            <Link to="/course/all">All Courses</Link>
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