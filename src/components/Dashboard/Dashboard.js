import React, { Component } from 'react';
import './Dashboard.css';
import {
    EllipsisV,
    EllipsisVB,
    File
} from '../Icon/Icon'

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <div className="dashboardContainer">
                <div className="Dashboard">
                    <div class="Dashheader">
                        Dashboard {EllipsisVB}
                    </div>
                </div>
                <div class="taskMenu">
                    <div class="todo">
                        To Do
                </div>
                    <p>Nothing for now</p>
                    <div class="feedback">
                        Feedback
                </div>
                    <p>
                        Nothing for now
                </p>
                    <p><button href="#">
                        View Grades
                </button></p>
                </div>
                <div class="card">
                    <div class="sub">
                        Sub{EllipsisV}
                    </div>
                    <div class="enroll">
                        Enrolled Courser
                </div>
                    <div class="file">
                        {File}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;