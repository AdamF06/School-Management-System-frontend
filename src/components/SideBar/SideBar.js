import React, { Component } from 'react';
import './SideBar.css';
import {
    Dash,
    Group,
    Payment,
    Email,
    Book,
    Rocket,
    Question,
    Setting,
    Chart,
    Search
} from '../Icon/Icon'
class SideBar extends Component {

    render() {
        return (
            <div className="sideBar">

                <div className="sideBar__top">
                    <form>
                        <input type="text" placeholder="JR Academy" name="search" />
                        <button>{Search}</button>
                    </form>
                </div>

                <div className="sideBar__main">
                    <div className="sideBar__main__left">
                        <ul>
                            <li> {Dash} </li>
                            <li> {Group} </li>
                            <li> {Chart} </li>
                            <li> {Payment} </li>
                            <li> {Email} </li>
                            <li> {Book} </li>
                        </ul>

                        <ul>
                            <li> {Rocket} </li>
                            <li> {Question} </li>
                            <li> {Setting} </li>
                        </ul>
                    </div>
                </div>

                <div className="sideBar__bot">
                    <div className="sideBar__bot__photo"></div>
                    <h3>JR Academy</h3>
                </div>
            </div>
        );
    }
}

export default SideBar;