import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'
import Axios from 'axios'
import "./AssignmentDetail.css"
import {
    uploadStudentAssignment,
    uploadCourse
} from '../../../actions'
class AssignmentDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: {}
        }
    }

    uploadAssignment = () => {
        const { id, match, student_ID, student_assignment, uploadStudentAssignment, identity, uploadCourse, course } = this.props
        const type = match.params.id.split('-').shift()
        const no = match.params.id.split('-').pop()
        const fd = new FormData()
        if (identity === "student") {
            fd.append('path', `${id}/${type}-${no}/${student_ID}`)
            fd.append('user', this.props.student_ID)
            fd.append('fileName', this.state.selectedFile.name)
            fd.append('files', this.state.selectedFile)
            uploadStudentAssignment(fd, id, type, no, student_assignment)
        } else {
            console.log(course)
            fd.append('path', `${id}/${type}-${no}`)
            fd.append('user', 'slides')
            fd.append('fileName', this.state.selectedFile.name)
            fd.append('files', this.state.selectedFile)
            uploadCourse(fd, course._id, course.assignment, no)
        }

    }
    selectFile = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }
    download = (index, key) => {
        const DOWNLOAD = 'http://127.0.0.1:8080/download/'
        const { course } = this.props
        const path = `/${course.course_ID}/assignment-${index}`
        const KEY = key.split('/').pop()
        console.log(path)
        Axios.get(DOWNLOAD + KEY, { params: { path } })
            .then((res) => { window.open(res.data.url) })
            .catch((err) => { console.log(err) })
    }
    render() {
        const { assignment, project, history } = this.props
        const type = history.location.pathname.split('/').pop().split('-').shift()
        const no = history.location.pathname.split('-').pop()
        if (type === "assignment") {
            var description = assignment[no - 1].description
            var name = assignment[no - 1].assignment_name
        } else {
            description = project[no - 1].description
            name = assignment[no - 1].assignment_name

        }

        return (
            <div className="assignment-detail">
                <section className="header">
                    <h1> {name}</h1>
                    <br />
                    <h2>{type}{no}</h2>
                </section>
                <section className="description">
                    <p>{description}</p>
                </section>
                <section className="resources">
                    <label>Resources:</label>
                    <h2 onClick={() => { this.download(no, assignment[no - 1].key) }}>{assignment[no - 1].key}</h2>
                </section>
                <section className="submit">
                    <input
                        onChange={(e) => { this.selectFile(e) }}
                        ref={fileInput => this.fileInput = fileInput}
                        type="file"
                        name="assignment"
                        accept=".xls,.doc,.txt,.pdf,.docx" />
                    <button
                        onClick={() => this.fileInput.click()}
                    ><Icon type="select" />Select</button>
                    <button
                        onClick={this.uploadAssignment}
                    > <Icon type="upload" /> Submit</button>
                    <div className={this.state.selectedFile.name ? "select-file" : ""}>
                        {this.state.selectedFile.name}
                    </div>
                </section>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { course, student, auth } = state;
    return {
        course: course.data,
        assignment: course.data.assignment,
        project: course.data.project,
        student_ID: student.info.student_ID,
        student_assignment: student.info.assignment,
        identity: auth.user_identity
    };
}
export default connect(mapStateToProps, {
    uploadStudentAssignment,
    uploadCourse
})(withRouter(AssignmentDetail))
