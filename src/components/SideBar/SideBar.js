import React, { Component } from 'react';
import './SideBar.css';
import {
    Dashboard,
    Group,
    Sales,
    Email,
    Rocket,
    Question,
    Setting,
    Site,
    Search,
    Course
} from '../Icon/Icon'
import SideBarItems from "./SideBarItems"

const userItems = [
    {
        icon: Dashboard,
        iconName: "Dashboard"
    },
    {
        icon: Group,
        iconName: "Users"
    },
    {
        icon: Site,
        iconName: "Site"
    },
    {
        icon: Sales,
        iconName: "Sales"
    },
    {
        icon: Email,
        iconName: "Emails"
    },
    {
        icon: Course,
        iconName: "Courses"
    },
]
const bottomItems = [
    {
        icon: Rocket,
        iconName: "Plan"
    },
    {
        icon: Question,
        iconName: "Help"
    },
    {
        icon: Setting,
        iconName: "Setting"
    },
]

class SideBar extends Component {
    constructor() {
        super()
        this.state = {
            user: "student",
            showList:false,
            triggeredButtom:""
        }
    }
    justifyBar =(e)=>{
        this.setState({
            showList:!this.state.showList,
            triggeredButtom:e.target.className
        })
        console.log(this.state.triggered)
        console.log(this.state.triggeredButtom)

    }

    render() {
        const {showList, triggeredButtom} = this.state
        return (

            <div className="sideBar">
                <div className="sideBar__top">
                    <form>
                        <input type="text" placeholder="JR Academy" name="search" />
                        <button>{Search}</button>
                    </form>
                </div>

                <div className={`sideBar__main ${showList? `show-${triggeredButtom}`:""}`}>
                    <div className="sideBar__main__left">
                        <ul>
                            {
                                userItems.map(
                                    (item, index) =>
                                        <li key={index}
                                        onClick={this.justifyBar}
                                        className={item.iconName}
                                        >
                                            <button
                                            ><SideBarItems {...item} />
                                            </button>                                          
                                            </li>
                                )
                            }
                        </ul>

                        <ul>
                        {
                                bottomItems.map(
                                    (item, index) =>
                                        <li key={index}
                                        onClick={this.justifyBar}
                                        className={item.iconName}
                                        >
                                            <button
                                            ><SideBarItems {...item} />
                                            </button>                                          
                                            </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="sideBar__main__right"></div>
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