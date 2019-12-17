import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enroll } from '../../actions'
import { Icon } from 'antd'
class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        const { enroll, courseList, enrolledCourse } = this.props
        const { student_ID, first_name, last_name } = JSON.parse(window.localStorage.userInfo)
        const student_data = { student_ID, first_name, last_name }
        const new_students = []
        enrolledCourse.student.forEach(element => {
            if (element.student_ID !== student_ID) {
                new_students.push(element)
            }
        });
        new_students.push(student_data)
        enroll(enrolledCourse, courseList, new_students, enrolledCourse._id)
    }
    componentWillReceiveProps(next) {
        if (next.err.err) {
            if (next.err.err === "success") {
                setTimeout(() => {
                    this.props.setSuccess()
                }, 1000);
            } else {
                setTimeout(() => {
                    this.props.setFailure()
                }, 1000);
            }
        }
    }
    render() {
        return (
            <div className="loading">
                <Icon type="sync" />
                <h1>Processing <span className="dotting"></span></h1>

            </div>

        );
    }
}
function mapStateToProps(state) {
    const { student, course } = state;
    return {
        courseList: student.info.course,
        enrolledCourse: course.data,
        err: student.err
    };
}
export default connect(mapStateToProps, {
    enroll
})(Loading)
