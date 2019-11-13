import React, { Component } from 'react';
import './SecondNav.css'
import UserSecondNav from '../User/Nav/secondNav'
import CourseSecondNav from '../Course/Nav/secondNav'
class SecondNav extends Component {  

    render() {
        const {selectedSecondNav, showSecondNav} = this.props.props

        return (
            <div className="secondNav">
                <div className={`userNav ${selectedSecondNav==='Users' && showSecondNav? '--active' :'--inactive'}`}>
                    <UserSecondNav/>
                </div>
                <div className={`courseNav ${selectedSecondNav==='Courses' && showSecondNav? '--active' :'--inactive'}`}>
                    <CourseSecondNav/>
                </div>
            </div>
        );
    }
}

export default SecondNav;