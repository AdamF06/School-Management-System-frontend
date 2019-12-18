import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
    EllipsisVB,
} from '../Icon/Icon'
import { connect } from 'react-redux';
import {
    setCurrentCourseId,
    getStudent,
    getTeacher
} from '../../actions'
import DashboardCard from './DashboardCard'

class Dashboard extends Component {
    componentDidMount() {
        const { getStudent,getTeacher,identity} = this.props
        switch (identity) {
            case "student":
                getStudent()
                break
            case "teacher":
                getTeacher()
                break
            default:
                console.log("identify error")
        }
    }
    
    setId = (id) => {
        this.props.setCurrentCourseId({ id })
    }

    render() {
        const { student_course, teacher_course, identity } = this.props
        let course = []
        switch (identity) {
            case "student":
                course = student_course
                break
            case "teacher":
                course = teacher_course
                break
            default:
                console.log("identify error")
        }

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
    const { student, teacher, auth } = state;
    return {
        student_course: student.course,
        teacher_course: teacher.course,
        identity: auth.user_identity
    };
}
export default connect(mapStateToProps, {
    setCurrentCourseId,
    getStudent,
    getTeacher
})(Dashboard);

