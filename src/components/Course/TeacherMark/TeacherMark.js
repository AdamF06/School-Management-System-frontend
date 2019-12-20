import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TeacherMark.css'
import { } from '../../../actions'
class TeacherMark extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    componentDidMount() {
        const { student } = this.props

        if (student) {
            console.log(student)
        }
    }
    render() {
        const { student } = this.props
        return (
            <div className="teacher-mark">
                {
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
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { course } = state;
    return {
        student: course.data.student
    };
}
export default connect(mapStateToProps, {})(TeacherMark)