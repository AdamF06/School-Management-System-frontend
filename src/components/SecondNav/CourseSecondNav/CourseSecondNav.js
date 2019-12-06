import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Quite } from '../../Icon/Icon';
import './CourseSecondNav.css'

class CourseSecondNav extends Component {

    render() {
        const { reset } = this.props
        console.log(this.props.course)
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
                        {
                            this.props.course.map((item, index) =>
                                <li key={index}>
                                    <Link 
                                    to={`/course/${item.course_ID}`}
                                    onClick={reset}
                                    >
                                        {item.course_name}
                                    </Link>
                                </li>
                            )
                        }
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

function mapStateToProps(state) {
    const { student } = state;
    return {
        course: student.course,
    };
}
export default connect(mapStateToProps)(CourseSecondNav);
