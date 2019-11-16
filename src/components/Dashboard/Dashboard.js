import React, { Component } from 'react';
import './Dashboard.css';
import {
    EllipsisV,
    EllipsisVB,
    File
} from '../Icon/Icon'
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
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
                                    <h2>Some course</h2>                                  
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
    const { auth } = state;
    //console.log("auth from state",auth)
    return {
        user_identity: auth.user_identity,
        user_status: auth.user_status,
    };
}
export default connect(mapStateToProps, {})(Dashboard);