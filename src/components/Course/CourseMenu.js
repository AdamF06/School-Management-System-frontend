import React, {Component} from "react";
import { Link } from "react-router-dom";
import './Course.css'

export default class CourseMenu extends Component {
    render(){  
    return (
      
          <div className="CourseMenu">
              <nav>
              <ul>
                  <li>
                  <Link to="/courseinfo">Home-CourseInfo</Link>
                  </li>
                  <li>
                  <Link to="/courseoutline">Course Outline</Link>
                  </li>
                  <li>
                  <Link to="/assignment">Assignment</Link>
                  </li>
                  <li>
                  <Link to="/assessment">Assessment</Link>
                  </li>
                  <li>
                  <Link to="/plagiarismpolicy">Plagiarism Policy</Link>
                  </li>
                  <li>
                  <Link to="/FAQ">FAQ</Link>
                  </li>                  

              </ul>
              </nav>

          </div>
    );
  }
}
