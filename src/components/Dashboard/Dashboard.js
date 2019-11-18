import React, { Component } from 'react';
import './Dashboard.css';
import {
    EllipsisVB,
    File
} from '../Icon/Icon'
import { connect } from 'react-redux';
//import { withRouter } from "react-router";
import { fetchCourse } from '../../actions'
import * as fc from '../../actions'
import { bindActionCreators } from 'redux';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            course: '',
        }
    }

    componentWillMount(){
        const { dispatch } = this.props;
        const fcq = bindActionCreators(fc.fetchCourseRequested, dispatch)
        const fcs = bindActionCreators(fc.fetchCourseSucceeded, dispatch)
        const fcf = bindActionCreators(fc.fetchCourseFailed, dispatch)
        fetchCourse(fcq, fcs, fcf)()
    }

    render() {
        console.log(this.props.course.length)
        
        return (
            <div className="dashboardContainer">
                <div className="dashboardBody">
                    <div className="main">
                        <div className="main__header">
                            <h1>Dashboard</h1> <button>{EllipsisVB}</button>
                        </div>

                        <div className="main__dashboardContainer">
                            <div className="dashboardCard">
                                <div className="dashboardCard__header">
                                    <h2>Some course </h2>
                                </div>
                                <div className="dashboardCard__info">

                                    <h4 className="ellipsis">Some course Some course</h4>
                                    <h3 className="ellipsis">8th</h3>
                                </div>
                                <div className="dashboardCard__action">
                                    <button> {File} </button>
                                </div>
                            </div>

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
                <div className="dashboardFooter">
                    <div className="dashboardFooter__container">
                        <a href="#">Privacy policy</a>
                        <a href="#">Acceptable Use policy</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
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
        err: student.err
    };
}


// export default connect(mapStateToProps, {fetchCourse})(Dashboard);
export default connect(mapStateToProps)(Dashboard);
