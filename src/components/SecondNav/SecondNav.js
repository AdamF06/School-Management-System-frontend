import React, { Component } from 'react';
import './SecondNav.css'
import UserSecondNav from './UserSecondNav/UserSecondNav'
import CourseSecondNav from './CourseSecondNav/CourseSecondNav'
class SecondNav extends Component {

    render() {
        const { selectedSecondNav, showSecondNav } = this.props.props
        console.log('from second nev ====== ',selectedSecondNav,showSecondNav)
        return (
            <div className="secondNavContainer">
                <div className={`secondNav ${showSecondNav?'secondNav--active':''}`}>
                    <div className={`userNav ${selectedSecondNav === 'Users' && showSecondNav ? '--active' : '--inactive'}`}>
                        <UserSecondNav />
                    </div>
                    <div className={`courseNav ${selectedSecondNav === 'Courses' && showSecondNav ? '--active' : '--inactive'}`}>
                        <CourseSecondNav />
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondNav;