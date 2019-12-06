import React, { Component } from 'react';
import { Bars } from '../../Icon/Icon';
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
import CourseThirdNav from '../Nav/CourseThirdNav'
import './CourseHome.css';
import HomePage from '../HomePage/HomePage'
import Assignment from '../Assignment/Assignment'
import Module from '../Module/Module'
import Mark from "../Mark/Mark"
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
        const { id } = this.props.match.params

        return (
            <div className="courseHomePageContainer">
                <div className="courseHomePage">
                    <div className="courseHomePage__header">
                        <button className="courseHomePage__header__menuButton">
                            {Bars}
                        </button>
                        <h1> <span>  {id} > </span> <span> {displayPage} </span> </h1>
                    </div>
                    <div className="courseHomePage__body">
                        <CourseThirdNav changePage={this.changePage} />
                        {/* <Route to="/course/home">  </Route> */}

                        <div className={`${displayPage === 'home' ? '--acitve' : '--inactive'}`}>
                            <HomePage />
                        </div>
                        <div className={`${displayPage === 'assignment' ? '--acitve' : '--inactive'}`}>
                            <Assignment />
                        </div>
                        <div className={`${displayPage === 'mark' ? '--acitve' : '--inactive'}`}>
                            <Mark />
                        </div>
                        <div className={`${displayPage === 'module' ? '--acitve' : '--inactive'}`}>
                            <Module />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (withRouter(CourseHome));