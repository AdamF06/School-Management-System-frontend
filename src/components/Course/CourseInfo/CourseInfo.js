import React, { Component } from 'react';
import './CourseInfo.css'


export default class CourseInfo extends Component {
  render() {
    return (
      <div className="CourseInfo">
        <div className="CourseInfo-top">
          <i class="fas fa-bars"></i>
          <h1>JR0001 Front-End</h1>
        </div>
        <div className="CourseInfo-main">          
          <div className="CourseInfo-main-content">
            <div className="overview">
              <h2>Overview</h2>
              <p>Welcome to a brief introduction to the ACS Professional Year Program in partnership with your chosen education provider. This short course will introduce you to ACS, outline the benefits of your ACS membership, provide an overview of the Professional Year Program including a summary of the key requirements. At the same time it will provide a short practical experience in using the Canvas Learning Management System (LMS).</p>
            </div>
            <div className="conditions">
              <h2>Conditions for Enrolment</h2>
              <p>pre-course</p>
            </div>
            <div className="stuff">
              <h2>Stuff</h2>
              <p>Professor:xxx Lecturor:xxx Tutor:xxx</p>
            </div>
            <div className="fee">
              <h2>Fee</h2>
            </div>
          </div>
        </div>  
      </div>
          
    );
  }
}
