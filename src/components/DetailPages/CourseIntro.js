import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'

import './CourseIntro.css'

class CourseIntro extends Component {
    state = {}

    componentDidMount(){
      
    }

    render() {       
        const id = this.props.location.pathname.split('/').pop()
        console.log(id)
        return (
            <div className="courseIntro">
                <div className="courseIntro-header">
                    <Link to="/dashboard">Home</Link>
                    <span> > </span>
                    <h2> {id} </h2>
                </div>
                <section className="courseIntro-overview"></section>
                <div className='courseIntro-nav'></div> 
                <section className="overview">
                    <h3>难度</h3>
                    <h3>前置知识</h3>
                    <h3>课程安排 （几节课，实习橡木）</h3>
                    <h3>价格</h3>
                    <h3>打折价</h3>
                    <h3>难度</h3>
                </section>
                <section className="syllabus">
                    <h1>大纲</h1>
                    <h3>你将掌握的技能</h3>
                    <h3>课程内容</h3>
                </section>
                <section className="time">
                    <h3> 开课时间 & 地点</h3>
                </section>
                <section className='teacher'>
                    <h1> teacher </h1>
                </section>
            </div>
        );
    }
}

export default withRouter(CourseIntro);