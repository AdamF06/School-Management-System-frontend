import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios'
import './TeacherMark.css'
import { } from '../../../actions'

class TeacherMark extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentArray: []
        }
    }
    //res.data[0].assignment.key(.name._id)
    //res.data[0].project

    componentDidMount() {
        const { student, course } = this.props
        const STUDENTS = 'http://127.0.0.1:8080/students/ID/'

        if (student) {
            student.forEach((element, index) => {
                Axios.get(STUDENTS + element.student_ID)
                    .then(res => {
                        console.log(res)
                        console.log(student)
                        let student_data = {
                            student_ID: student[index].student_ID,
                            student_name: student[index].first_name + " " + student[index].last_name,
                            assignment: res.data[0].assignment,
                            project: res.data[0].project
                        }
                        console.log(student_data)
                        this.setState({
                            studentArray: this.state.studentArray.concat(student_data)
                        })
                    })
                    .catch(err => console.log(err))
            });
        }
    }
    render() {
        const { student, course } = this.props
        const { studentArray } = this.state
        return (
            <div className="teacher-mark">
                <div className="assignment">
                    {
                        course.assignment.map((item, index) =>
                            <div
                                key={index}
                                className="assignment_container"
                            >
                                <h2 className="title">{item.assignment_name}</h2>
                                {
                                    studentArray.map((item, index2) =>
                                        <div className="student" key={index2}>
                                            <div className="left">
                                                <h3> {item.student_ID}</h3>
                                                <h3> {item.student_name}</h3>
                                                <h3 className="key">{item.assignment[index].key}</h3>
                                            </div>

                                            <div className="right">
                                                <h3 className="mark">{item.assignment[index].mark}Pt</h3>
                                                <input placeholder="assign marks"></input>
                                                <button>Update</button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>)
                    }
                </div>
                <div className="project">
                    {
                        course.project.map((item, index) =>
                            <div
                                key={index}
                                className="assignment_container"
                            >
                                <h2 className="title">{item.assignment_name}</h2>
                            </div>)
                    }
                </div>
                {/* {
                    student.map((item, index) =>
                        <div className="student-list" key={index}>
                            <div className="left">
                                <h1>{item.student_ID}</h1>
                                <h1>{item.first_name}</h1>
                                <h1>{item.last_name}</h1>
                            </div>
                            <div className="right">
                                <h1>-/-Pts</h1>
                                <input placeholder="assign marks"></input>
                                <button>update</button>
                            </div>
                        </div>
                    )
                } */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { course } = state;
    return {
        student: course.data.student,
        course: course.data
    };
}
export default connect(mapStateToProps, {})(TeacherMark)