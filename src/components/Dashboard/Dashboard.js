import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
    EllipsisVB,
} from '../Icon/Icon'
import { connect } from 'react-redux';
import {
    fetchCourse,
    setCurrentCourseId,
    getStudent
} from '../../actions'
import DashboardCard from './DashboardCard'

class Dashboard extends Component {

    componentDidMount() {
        const { fetchCourse, getStudent } = this.props
        getStudent()        
        fetchCourse()
    }
    setId = (id) => {
        this.props.setCurrentCourseId({id})
    }

    render() {
        const { course,info,testCourse } = this.props
        console.log(course,info)
        console.log(testCourse)
        return (
            <div className="dashboardContainer">
                <div className="dashboardBody">
                    <div className="main">
                        <div className="main__header">
                            <h1>Dashboard</h1> <button>{EllipsisVB}</button>
                        </div>
                        <div className="main__dashboardContainer">
                            {
                                testCourse.map((item, index) =>
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
                        <a href="/">Privacy policy</a>
                        <a href="/">Acceptable Use policy</a>
                        <a href="/">Facebook</a>
                        <a href="/">Twitter</a>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { student } = state;
    return {
        info:student.info,
        course: student.course,
        err: student.err,
        testCourse:student.testCourse
    };
}
export default connect(mapStateToProps, {
    fetchCourse,
    setCurrentCourseId,
    getStudent
})(Dashboard);

