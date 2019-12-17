import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'

import "./AssignmentDetail.css"
import { uploadStudentAssignment } from '../../../actions'
class AssignmentDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: {}
        }
    }

    uploadAssignment = () => {
        const { id, match, student_ID, student_assignment, uploadStudentAssignment } = this.props
        const type = match.params.id.split('-').shift()
        const no = match.params.id.split('-').pop()
        const fd = new FormData()
        fd.append('path', `${id}/${type}-${no}/${student_ID}`)
        fd.append('user', this.props.student_ID)
        fd.append('fileName', this.state.selectedFile.name)
        fd.append('files', this.state.selectedFile)
        uploadStudentAssignment(fd, id, type, no, student_assignment)
    }
    selectFile = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }
    render() {
        const { assignment, project, history } = this.props
        const type = history.location.pathname.split('/').pop().split('-').shift()
        const no = history.location.pathname.split('-').pop()
        if (type === "assignment") {
            var description = assignment[no-1].description
            var name = assignment[no-1].assignment_name
        } else {
            description = project[no-1].description
            name = assignment[no-1].assignment_name

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
    const { course, student } = state;
    return {
        assignment: course.data.assignment,
        project: course.data.project,
        student_ID: student.info.student_ID,
        student_assignment: student.info.assignment
    };
}
export default connect(mapStateToProps, {
    uploadStudentAssignment
})(withRouter(AssignmentDetail))
