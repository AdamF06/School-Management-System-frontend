import React, { Component } from 'react';
import './SecondNav.css'
import UserSecondNav from '../User/Nav/secondNav'

class SecondNav extends Component {  

    render() {
        const {selectedSecondNav, showSecondNav} = this.props.props

        return (
            <div className="secondNav">
                <div className={`userNav ${selectedSecondNav==='Users' && showSecondNav? '--active' :'--inactive'}`}>
                    <UserSecondNav/>
                </div>
            </div>
        );
    }
}

export default SecondNav;