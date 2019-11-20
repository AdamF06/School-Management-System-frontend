import React, { Component } from 'react';
import { Bars } from '../../Icon/Icon';
import { withRouter } from 'react-router'
import CourseThirdNav from '../Nav/CourseThirdNav'
import './CourseHome.css';
import HomePage from '../HomePage/HomePage'
import Assignment from '../Assignment/Assignment'
class CourseHome extends Component {
    constructor() {
        super()
        this.state = {
            displayPage: 'home'
        }
    }

    changePage = (name) => {
        this.setState({
            displayPage: name
        })
    }

    render() {
        const { displayPage } = this.state
        console.log(displayPage)
        return (
            <div className="courseHomePageContainer">
                <div className="courseHomePage">
                    <div className="courseHomePage__header">
                        <button className="courseHomePage__header__menuButton">
                            {Bars}
                        </button>
                        <h1>Home of 'CourseName'</h1>
                    </div>
                    <div className="courseHomePage__body">
                        <CourseThirdNav changePage={this.changePage} />
                        <Assignment/>
                        {/* <div className={`${displayPage === 'home' ? '--acitve' : '--inactive'}`}>
                            <HomePage />
                        </div>
                        <div className={`${displayPage === 'assignment' ? '--acitve' : '--inactive'}`}>
                            <Assignment/>
                        </div>
                        <div className={`${displayPage === 'mark' ? '--acitve' : '--inactive'}`}>
                            mark
                        </div>
                        <div className={`${displayPage === 'module' ? '--acitve' : '--inactive'}`}>
                            module
                        </div> */}
                    </div>
                </div>

                <div className="footer">
                    <div className="footer__container">
                        <a href="#">Privacy policy</a>
                        <a href="#">Acceptable Use policy</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default (withRouter(CourseHome));