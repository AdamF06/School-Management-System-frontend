import React, { Component } from 'react';
import { Link} from "react-router-dom"
import { withRouter } from "react-router";

import './Enrollment.css'
import EnrollItems from './EnrollItems'
import DropItems from './DropItems'
import CourseCard from './CourseCard'
import {
    Search,
    Category,
    DataScience,
    SoftwareEng,
    WebDev
} from '../Icon/Icon'

const dummyDropList = [
    {
        icon: WebDev,
        name: "Web development"
    },
    {
        icon: DataScience,
        name: "Data Science"
    },
    {
        icon: SoftwareEng,
        name: "Software Engineering"
    },
]
const dummyCourse = [
    {
        name: "Some Course a",
        starPt: '5',
        startDate: "Start at dd/mm/yy"
    },
    {
        name: "Some Course b",
        starPt: '4',
        startDate: "Start at dd/mm/yy"
    },
    {
        name: "Some Course c",
        starPt: '3',
        startDate: "Start at dd/mm/yy"
    },
    {
        name: "Some Course d",
        starPt: '2',
        startDate: "Start at dd/mm/yy"
    },
    {
        name: "Some Course e",
        starPt: '5',
        startDate: "Start at dd/mm/yy"
    },
    {
        name: "Some Course f",
        starPt: '4',
        startDate: "Start at dd/mm/yy"
    },
    {
        name: "Some Course g",
        starPt: '3',
        startDate: "Start at dd/mm/yy"
    },
    {
        name: "Some Course  h",
        starPt: '2',
        startDate: "Start at dd/mm/yy"
    },

]
class Enrollment extends Component {
    state = {
        dropList: false
    }
    render() {
        const { dropList } = this.state
        return (
            <div className='enrollment'>
                <div className='header'>
                    <h1>Enrollment</h1>
                </div>
                <div className='body'>
                    <div className="body__topbar">
                        <img src={require('./JRIcon.png')} alt="icon img"></img>
                        <div className='body__topbar__category'
                            onMouseOver={() => this.setState({ dropList: true })}
                            onMouseLeave={() => this.setState({ dropList: false })}
                        >
                            {Category}
                            <h4>Categories</h4>
                        </div>
                        <form className='body__topbar__search'>
                            <input type="text" placeholder="Find a course" name="search" />
                            <button className="top__button">{Search}</button>
                        </form>
                    </div>
                    <div className={`dropList ${dropList ? '' : "--hide"}`}
                        onMouseOver={() => this.setState({ dropList: true })}
                        onMouseLeave={() => this.setState({ dropList: false })}
                    >
                        <div className="dropList-head">
                            <span className='upper'>◆</span>
                            <span className='lower'>◆</span>
                        </div>
                        {
                            dummyDropList.map(
                                (item, index) => <DropItems {...item} key={index} />
                            )
                        }
                    </div>
                    <div className="scrolling">
                        <div className='scrolling__list'>
                            <Link to="/detail/123"> <CourseCard/> </Link>
                            <Link to="/detail/123"> <CourseCard/> </Link>
                            <Link to="/detail/123"> <CourseCard/> </Link>
                            <Link to="/detail/123"> <CourseCard/> </Link>
                            <Link to="/detail/123"> <CourseCard/> </Link>
                            <Link to="/detail/123"> <CourseCard/> </Link>
                            <Link to="/detail/123"> <CourseCard/> </Link>
                        </div>
                    </div>

                    <div className="body__content">
                        {
                            dummyCourse.map(
                                (item, index) => <EnrollItems {...item} key = {index} />
                            )
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default  (withRouter(Enrollment));