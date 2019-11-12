import React, { Component } from 'react';
import './CourseOutline.css'

export default class CourseOutline extends Component {
  render() {
    return (
      <div className="CourseOutline">
        <div className="CourseOutline-top">
          <h1>JR0001 Front-End</h1>
        </div>
        <div className="CourseOutline-main">
          <h2>Course Outline</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>           
    );
  }
}