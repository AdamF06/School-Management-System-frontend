import React, { Component } from 'react';
import './Dashboard.css';
import {
    EllipsisVB,
} from '../Icon/Icon'
import { connect } from 'react-redux';
import { fetchCourse } from '../../actions'
import DashboardCard from './DashboardCard'

class Dashboard extends Component {

    componentWillMount(){
        const {fetchCourse} = this.props
        fetchCourse()
    }

    render() {
        const {course}  = this.props
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
                                course.map((item,index)=><DashboardCard key={index} {...item}/> )
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
export default connect(mapStateToProps, {fetchCourse})(Dashboard);

