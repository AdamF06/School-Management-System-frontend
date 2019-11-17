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
    justifyBar = (iconName)=>{
        const secondNavIcon = ['Users','Courses']
        this.setState({
            selectedSecondNav:iconName
        })
        if(secondNavIcon.indexOf(iconName) > -1){
            this.setState({
                showSecondNav:true
            })
        }else{
            this.setState({
                showSecondNav:false
            })
        }
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
                                                onClick={(e) => { this.justifyBar(e, item.iconName) }}>
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