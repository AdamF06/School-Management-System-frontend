import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import './CourseIntro.css'

class CourseIntro extends Component {
    state = {}

    componentDidMount() {

    }

    render() {
        const id = this.props.location.pathname.split('/').pop()
        console.log(id)
        return (
            <div className="courseIntro">
                <div className="courseIntro-header">
                    <Link to="/dashboard">Home</Link>
                    <span> > </span>
                    <Link to="/enroll">Enrollment</Link>
                    <span> > </span>
                    <h4> {id} </h4>
                </div>
                <section className="courseIntro-overview">
                    <div className="courseIntro-overview__left">
                        <h1>Full Stack Developing</h1>
                        <h3>Brive introduction: xxxxxx,xxxxx</h3>
                        <button>Join Now</button>
                    </div>
                </section>
                <div className='courseIntro-nav'></div>
                <div className="courseIntro-title">
                    <h3>Course Overview</h3>
                    <h4>Course Overview</h4>
                </div>
                <section className="overview">
                    <div className="overview__card">
                        <h3>Head Level</h3>
                    </div>
                    <div className="overview__card">
                        <h3>Preposition Knowledge</h3>
                    </div>
                    <div className="overview__card">
                        <h3>Curriculum</h3>
                    </div>
                    <div className="overview__card">
                        <h3>Tuition</h3>
                    </div>
                </section>
                <div className="courseIntro-title">
                    <h3>Course Syllabus</h3>
                    <h4>Course Syllabus</h4>
                </div>
                <section className="syllabus">
                    <h1>大纲</h1>
                    <h3>你将掌握的技能</h3>
                    <h3>课程内容</h3>
                </section>
                <div className="courseIntro-title">
                    <h3>Course Opening time</h3>
                    <h4>Course Opening time</h4>
                </div>
                <section className="time">
                    <h3> 开课时间 & 地点</h3>
                </section>
                <div className="courseIntro-title">
                    <h3>Course Teachers</h3>
                    <h4>Course Teachers</h4>
                </div>
                <section className='teacher'>
                    <h1> teacher </h1>
                </section>
            </div>
        );
    }
}

export default withRouter(CourseIntro);