import React, { Component } from 'react';
import './Course.css'


export default class CourseInfo extends Component {
  render() {
    return (
      <div className="CourseInfo">
        <div className="CourseInfo-top">
          <i class="fas fa-bars"></i>
          <h1>Course ID - Course Name</h1>
        </div>
        <div className="CourseInfo-main">
          {/* <div className="CourseInfo-main-left">
            <h2>Course Info</h2>
            <h2>Course Outline</h2>
            <h2>Assignment</h2>
            <h2>Assessment</h2>
            <h2>Plagiarism Policy</h2>
            <h2>FAQ</h2>
          </div> */}
          <div className="CourseInfo-main-content">
            <h2>Overview</h2>
            <p>Welcome to a brief introduction to the ACS Professional Year Program in partnership with your chosen education provider. This short course will introduce you to ACS, outline the benefits of your ACS membership, provide an overview of the Professional Year Program including a summary of the key requirements. At the same time it will provide a short practical experience in using the Canvas Learning Management System (LMS).</p>
            <h2>Conditions for Enrolment</h2>
            <p>pre-course</p>
            <h2>Professor-Lecturor-Tutor</h2>
            <p>Professor:xxx Lecturor:xxx Tutor:xxx</p>
            <h2>Fees</h2>
          </div>
        </div>  
      </div>
          
    );
  }
}
