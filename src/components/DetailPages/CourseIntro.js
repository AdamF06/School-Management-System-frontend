import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Icon, Timeline } from 'antd'
import './CourseIntro.css'

class CourseIntro extends Component {
    state = {
        hideSkill: false,
        hideContent: false
    }

    componentDidMount() {

    }

    hideSkill = () => {
        this.setState({
            hideSkill: !this.state.hideSkill
        })
    }
    hideContent = () => {
        this.setState({
            hideContent: !this.state.hideContent
        })
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
                        <Icon type="bulb" />
                        <h3>Hard Level</h3>
                        <h6>Primary</h6>
                        <h6 className='--black'>Mid</h6>
                        <h6>Advance</h6>
                    </div>
                    <div className="overview__card">
                        <Icon type="book" />
                        <h3>Preposition Knowledge</h3>
                        <h6 className='--black'>
                            HTML CSS JS xxxxxxxx,
                            xxxxxxxxxx,
                            xxxxxxxxxxx
                        </h6>
                    </div>
                    <div className="overview__card">
                        <Icon type="schedule" />
                        <h3>Curriculum</h3>
                        <h6 className='--black'>
                            Three monthes class,
                            (90Hours/30 Classes),
                            + two monthes internship
                        </h6>

                    </div>
                    <div className="overview__card">
                        <Icon type="dollar" />
                        <h3>Tuition</h3>
                        <h6 className='--black'>On-line Class: $3,000</h6>
                        <h6 className='--black'>Off-line Class: $5,000</h6>
                        <h6 className='--black'>Internship: $2,000</h6>
                    </div>
                </section>
                <div className="courseIntro-title">
                    <h3>Course Syllabus</h3>
                    <h4>Course Syllabus</h4>
                </div>
                <section className="syllabus">
                    <button
                        onClick={this.hideSkill}
                    >Skills you will gain
                        <Icon type="plus-circle" />
                    </button>
                    <ul className={`skills${this.state.hideSkill ? "--hide" : ""}`}>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                        <li></li><li></li>
                    </ul>
                    <button
                        onClick={this.hideContent}
                    >Course Content
                        <Icon type="plus-circle" />
                    </button>

                    <div className={`course-content${this.state.hideContent ? "--hide" : ""}`}>
                        <div className='card'>
                            <div className="card__title">
                                <h2>Web Full Stack classes</h2>
                                <h2>Time table</h2>
                            </div>
                            <h3>Some contents</h3>
                            <h3>xxxx xxxx xxxx xxxx</h3>
                            <h3>xxxx xxxx xxxx xxxx</h3>
                            <h3>xxxx xxxx xxxx xxxx</h3>
                            <button className="card__download">
                                Download time table
                            <Icon type="vertical-align-bottom" />
                            </button>
                        </div>

                        <div className='card'>
                            <div className="card__title">
                                <h2>Internship</h2>
                                <h2>Time table</h2>
                            </div>
                            <h3>Some contents</h3>
                            <h3>xxxx xxxx xxxx xxxx</h3>
                            <h3>xxxx xxxx xxxx xxxx</h3>
                            <h3>xxxx xxxx xxxx xxxx</h3>
                            <button className="card__download">
                                Download time table
                            <Icon type="vertical-align-bottom" />
                            </button>
                        </div>
                    </div>
                </section>

                <div className="courseIntro-title">
                    <h3>Course Opening time</h3>
                    <h4>Course Opening time</h4>
                </div>
                <section className="time">
                    <ol>
                        <li>
                            <div>
                                <time>1934</time> At vero eos et accusamus
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1937</time> Proin quam 
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1940</time> Proin iaculis, nibh eget efficitur
                            </div>
                        </li>

                        <li></li>
                        <li></li>
                    </ol>
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