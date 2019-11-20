import React, { Component } from 'react';
import { withRouter } from "react-router";
import './PrimaryNav.css';
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
import PrimaryNavItems from "./PrimaryNavItems"
import SecondNav from '../SecondNav/SecondNav';

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

class PrimaryNav extends Component {
    constructor() {
        super()
        this.state = {
            user: "student",
            showSecondNav: false,
            selectedSecondNav: "",
        }
    }
    iconToUrl = (iconName) => {
        console.log('at inon to url,', iconName)
        switch (iconName) {
            case 'Dashboard':
                return '/dashboard'
            case 'Setting':
                return '/setting'
            case 'Sales':
                return '/sale'
            default:
                break;
        }
    }

    justifyBar = (iconName) => {
        const secondNavIcon = ['Users', 'Courses']
        const { selectedSecondNav, showSecondNav } = this.state
        const { history } = this.props;
        const url = this.iconToUrl(iconName)

        //none in active
        if (showSecondNav === false) {
            this.setState({
                selectedSecondNav: iconName
            })
            //clicked icon has second nav
            if (secondNavIcon.indexOf(iconName) > -1) {
                this.setState({
                    showSecondNav: true
                })
            } else {
                this.setState({
                    showSecondNav: false
                })
                history.push(url);
            }
        } else {
            //concel itself
            if (selectedSecondNav === iconName) {
                this.setState({
                    selectedSecondNav: iconName,
                    showSecondNav: false
                })
            } else {//jump to other icon which has second nav
                if (secondNavIcon.indexOf(iconName) > -1) {
                    this.setState({
                        showSecondNav: true,
                        selectedSecondNav: iconName
                    })
                } else {//jump to other icon but hasn't second nav
                    this.setState({
                        showSecondNav: false,
                        selectedSecondNav: iconName
                    })
                    history.push(url)
                }
            }
        }
    }
    reset = () => {
        this.setState({
            selectedSecondNav: "",
            showSecondNav: false
        })
    }

    render() {
        const { showSecondNav, selectedSecondNav } = this.state
        return (
            <div className="navConatiner">
                <div className="primaryNav">
                    <div className={`primaryNav__top ${showSecondNav ? 'primaryNav__top--right-active' : ""}`} >
                        <form className="top__form">
                            <input type="text" placeholder="JR Academy" name="search" />
                            <button className="top__button">{Search}</button>
                        </form>
                    </div>

                    <div className={`primaryNav__main ${showSecondNav ? 'primaryNav__main--right-active' : ""}`}>
                        <ul> {
                            userItems.map(
                                (item, index) =>
                                    <li key={index}>
                                        <button
                                            className={item.iconName}
                                            onClick={(e) => { this.justifyBar(item.iconName) }}>
                                            <PrimaryNavItems {...item} />
                                        </button>
                                    </li>
                            )
                        } </ul>

                        <ul>{
                            bottomItems.map(
                                (item, index) =>
                                    <li key={index}>
                                        <button
                                            className={item.iconName}
                                            //onClick={this.justifyBar(item.iconName)}>
                                            onClick={() => { this.justifyBar(item.iconName) }}>
                                            <PrimaryNavItems {...item} />
                                        </button>
                                    </li>
                            )
                        }</ul>
                    </div>

                    <div className={`primaryNav__bot ${showSecondNav ? 'primaryNav__bot--right-active' : ""}`}>
                        <div className="primaryNav__bot__photo"></div>
                        <h3>JR Academy</h3>
                    </div>
                </div>
                <SecondNav props={{ selectedSecondNav, showSecondNav }} />
            </div>
        );
    }
}

export default (withRouter(PrimaryNav))