import React, { Component } from 'react';
import './Dashboard.css';
import {
    EllipsisV,
    EllipsisVB,
    File
} from '../Icon/Icon'
import axios from 'axios';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {}
    getCourse = async ()=>{
        const _id = '5dcb529260c38711553efe38'
        const getStudentApi_res = await axios({
            url: 'http://127.0.0.1:8080/students/'+_id,
            method: 'get',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNiNTI5MjYwYzM4NzExNTUzZWZlMzgiLCJzdHVkZW50X0lEIjoiMDAwMDAxIiwiZW1haWwiOiJ0ZXN0QHFxLmNvbSIsImlkZW50aXR5Ijoic3R1ZGVudCIsImZpcnN0X25hbWUiOiJBZGFtIiwiaWF0IjoxNTczNjIwMTU4fQ.jqa87GlFrty-Gm6pXl9VXN_U_YWYDOjYvWJMEmJfSbU"
            }
        }) 
        console.log(getStudentApi_res) 
    }
    componentDidMount(){
        console.log(this.props)
        this.getCourse()
    }
    render() {
        return (
            <div className="dashboardContainer">
                <div className="Dashboard">
                    <div className="Dashheader">Dashboard {EllipsisVB}</div>
                </div>

                <div className="taskMenu">
                    <div className="todo">To Do </div>
                    <p>Nothing for now</p>
                    <div className="feedback"> Feedback </div>
                    <p> Nothing for now </p>
                    <p> <button href="#"> View Grades </button> </p>
                </div>

                <div className="card">
                    <div className="sub"> Sub{EllipsisV} </div>
                    <div className="enroll">Enrolled Courser</div>
                    <h3> {File} </h3>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { student } = state;
    return {
        identity: student.identity,
        status: student.status,
        _id:student._id
    };
}
export default connect(mapStateToProps, {})(Dashboard);