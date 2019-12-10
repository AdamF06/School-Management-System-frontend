import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Icon } from 'antd'
import Dialog from './Dialog'
import './CourseIntro.css'

class CourseIntro extends Component {
    state = {
        hideSkill: false,
        hideContent: false,
        isDialogOpen: false
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
    closeDialog = ()=>{
        this.setState({
            isDialogOpen:false
        })
    }
    openDialog =() =>{
        this.setState({
            isDialogOpen:true
        })
    }
    render() {
        const id = this.props.location.pathname.split('/').pop()
        console.log(id)
        return (
            <div className={`courseIntro ${this.state.isDialogOpen?"courseIntro--lock":""}`}>
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
                        <button onClick={()=>this.setState({isDialogOpen:true})}> Join Now </button>
                    </div>
                </section>

                <section className="courseIntro-dialog">
                    <Dialog 
                    closeDialog={this.closeDialog}
                    isDialogOpen={this.state.isDialogOpen}
                    />
                </section>
                    {/* <div className='courseIntro-nav'>
                    <button>Overview</button>
                    <button>Syllabus</button>
                    <button>Time</button>
                    <button>Teacher</button>

                </div> */}
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
                                    <time>1st Jan, 2020</time>
                                    <p>Class Start</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>1st Mar, 2020</time>
                                    <p>Class end, internship Start </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>1st May, 2020</time>
                                    <p>Get your offer! </p>
                                </div>
                            </li>
                            <li></li>
                        </ol>
                    </section>
                    <div className="courseIntro-title">
                        <h3>Course Teachers</h3>
                        <h4>Course Teachers</h4>
                    </div>
                    <section className='teacher'>
                        <div className="teacher-card">
                            <div className="teacher-card__avatar">
                                <img src={require('../Emrollment/JRIcon.png')} alt="icon img"></img>

                            </div>
                            <div className="teacher-card__name">
                                Some Teacher
                        </div>
                            <div className="teacher-card__title">
                                P8
                        </div>
                            <div className="teacher-card__bio">
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                        </div>
                            <div className="teacher-card__company">
                                <ol>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </div>
                            <div className="teacher-card__tag">
                                <ol>
                                    <li>Big God</li>
                                    <li>Old Driver</li>
                                    <li>Tech lead</li>
                                </ol>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <div className="teacher-card__avatar">
                                <img src={require('../Emrollment/JRIcon.png')} alt="icon img"></img>

                            </div>
                            <div className="teacher-card__name">
                                Some Teacher
                        </div>
                            <div className="teacher-card__title">
                                P8
                        </div>
                            <div className="teacher-card__bio">
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                        </div>
                            <div className="teacher-card__company">
                                <ol>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </div>
                            <div className="teacher-card__tag">
                                <ol>
                                    <li>Big God</li>
                                    <li>Old Driver</li>
                                    <li>Tech lead</li>
                                </ol>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <div className="teacher-card__avatar">
                                <img src={require('../Emrollment/JRIcon.png')} alt="icon img"></img>

                            </div>
                            <div className="teacher-card__name">
                                Some Teacher
                        </div>
                            <div className="teacher-card__title">
                                P8
                        </div>
                            <div className="teacher-card__bio">
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                                xxxxxxxxxxx xxxxxxxxxxx
                        </div>
                            <div className="teacher-card__company">
                                <ol>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </div>
                            <div className="teacher-card__tag">
                                <ol>
                                    <li>Big God</li>
                                    <li>Old Driver</li>
                                    <li>Tech lead</li>
                                </ol>
                            </div>
                        </div>
                    </section>          
            </div>
                );
            }
        }
        
export default withRouter(CourseIntro);