import React, { Component } from 'react';
import { Bars } from '../../Icon/Icon';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { getCourse } from '../../../actions'

import CourseThirdNav from '../Nav/CourseThirdNav'
import './CourseHome.css';
import HomePage from '../HomePage/HomePage'
import Assignment from '../Assignment/Assignment'
import Module from '../Module/Module'
import Mark from "../Mark/Mark"
import TeacherMark from '../TeacherMark/TeacherMark'
import ModuleDetail from '../Module/ModuleDetail'
import AssignmentDetail from '../Assignment/AssignmentDetail'
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

    componentDidMount() {
        const { id, getCourse } = this.props
        getCourse(id)
    }

    render() {
        const { displayPage } = this.state
        const id = this.props.id
        console.log(this.props.course)
        let mark=(<></>)
        if(this.props.identity==="teacher"){
            mark=(
                <Route path="/course/:id/mark"> <TeacherMark /> </Route>
            )
        }else{
            mark=(
                <Route path="/course/:id/mark"> <Mark /> </Route>
            )
        }
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
                        <CourseThirdNav changePage={this.changePage} id={id} />
                        <Route exact path="/course/:id"> <HomePage /> </Route>
                        {mark}
                        <Route exact path="/course/:id/assignment">
                            <Assignment
                                id={id}
                                assignment={this.props.course.assignment}
                                project={this.props.course.project}
                            />
                        </Route>
                        <Route exact path="/course/:id/module">
                            <Module
                                id={id}
                                module={this.props.course.module}
                            />
                        </Route>
                        <Route path="/course/:id/module/:id"> <ModuleDetail /> </Route>
                        <Route path="/course/:id/assignment/:id"> 
                        <AssignmentDetail id={id}/> </Route>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { courseid, course,auth } = state;
    return {
        id: courseid.id,
        course: course.data,
        identity:auth.user_identity
    };
}
export default connect(mapStateToProps, {
    getCourse
})(CourseHome)