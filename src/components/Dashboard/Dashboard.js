import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
    EllipsisVB,
} from '../Icon/Icon'
import { connect } from 'react-redux';
import {
    fetchCourse,
    setCurrentCourseId
} from '../../actions'
import DashboardCard from './DashboardCard'

class Dashboard extends Component {

    componentDidMount() {
        const { fetchCourse } = this.props
        fetchCourse()
    }
    setId = (id) => {
        this.props.setCurrentCourseId({id})
    }

    render() {
        const { course } = this.props
        console.log(course)

        return (
            <div className="dashboardContainer">
                <div className="dashboardBody">
                    <div className="main">
                        <div className="main__header">
                            <h1>Dashboard</h1> <button>{EllipsisVB}</button>
                        </div>
                        <div className="main__dashboardContainer">
                            {
                                course.map((item, index) =>
                                    <Link to={`/course/${item.course_ID}`}
                                        onClick={() => { this.setId(item.course_ID) }}
                                        key={index}>
                                        <DashboardCard  {...item} />
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                    <div className="todo">
                        <div className="todo__listContainer ">
                            <h3>To Do</h3>
                            <span>Nothing for now</span>
                        </div>
                        <div className="todo__recentFeedbackContainer ">
                            <h3>Recent Feedback</h3>
                            <span>Nothing for now</span>
                        </div>
                        <button className="todo__viewGrade"> <h4>view Grades</h4> </button>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer__container">
                        <a href="www.google.com">Privacy policy</a>
                        <a href="www.google.com">Acceptable Use policy</a>
                        <a href="www.google.com">Facebook</a>
                        <a href="www.google.com">Twitter</a>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { student } = state;
    return {
        course: student.course,
        err: student.err,
    };
}
export default connect(mapStateToProps, {
    fetchCourse,
    setCurrentCourseId
})(Dashboard);

