import React, { Component } from 'react';
import './SecondNav.css'
import UserSecondNav from './UserSecondNav/UserSecondNav'
import CourseSecondNav from './CourseSecondNav/CourseSecondNav'
class SecondNav extends Component {
    constructor() {
        super()
        this.state = {
            selectedSecondNav: '',
            showSecondNav: false,
        }
    }

    render() {
        const { selectedSecondNav, showSecondNav, reset } = this.props
        return (
            <div className="secondNavContainer">
                <div className={`secondNav ${showSecondNav ? 'secondNav--active' : ''}`}>
                    <div className={`userNav ${selectedSecondNav === 'Users' && showSecondNav ? '--active' : '--inactive'}`}>
                        <UserSecondNav reset={reset} />
                    </div>
                    <div className={`courseNav ${selectedSecondNav === 'Courses' && showSecondNav ? '--active' : '--inactive'}`}>
                        <CourseSecondNav reset={reset} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondNav;