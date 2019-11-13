import React, { Component } from 'react';
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
    justifyBar = (iconName) => {
        const { selectedSecondNav, showSecondNav } = this.state
        const noSecondIcon = ['Dashboard']
        //first time load or in clear stage([noSecondIcon] may be selected)
        if (showSecondNav === false) {
            //selceted icons have no secondary navbar
            if (noSecondIcon.indexOf(iconName) > -1) {
                this.setState({
                    showSecondNav: false,
                    selectedSecondNav: iconName
                })

            } else {
                this.setState({
                    showSecondNav: true,
                    selectedSecondNav: iconName
                })
            }
        } else {//some icon has been activated 
            //clicked on the same icon 
            if (selectedSecondNav === iconName){
                this.setState({
                    showSecondNav:false,
                    selectedSecondNav:''
                })
            }else{//click on other icon
                //no secondary navbar
                if(noSecondIcon.indexOf(iconName) > -1){
                    this.setState({
                        showSecondNav: false,
                        selectedSecondNav: iconName
                    })
                }else{//has secondary navbar
                    this.setState({
                        showSecondNav:true,
                        selectedSecondNav:iconName
                    })
                }
            }
        }
        // primary link
        if (noSecondIcon.indexOf(iconName) > -1){
            switch (iconName) {
                case 'Dashboard':
                    window.location.href='http://localhost:3000/dashboard'
                    break;           
                default:
                    break;
            }
        }
    }

    render() {
        const { showSecondNav, selectedSecondNav } = this.state
        return (

            <div className="primaryNav">
                <div className="primaryNav__top">
                    <form className="top__form">
                        <input type="text" placeholder="JR Academy" name="search" />
                        <button className="top__button">{Search}</button>
                    </form>
                </div>

                <div className={`primaryNav__main ${showSecondNav ? `show-${selectedSecondNav}  primaryNav__main-right-active` : ""}`}>
                    <div className="primaryNav__main__left">
                        <ul> {
                            userItems.map(
                                (item, index) =>
                                    <li key={index}>
                                        <button
                                            id={item.iconName}
                                            className={this.state.currentName === index ? 'active' : null}
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
                                            id={item.iconName}
                                            //onClick={this.justifyBar(item.iconName)}>
                                            onClick={(e) => { this.justifyBar(e, item.iconName) }}>
                                            <PrimaryNavItems {...item} />
                                        </button>
                                    </li>
                            )
                        }</ul>
                    </div>

                    <SecondNav props={{ selectedSecondNav, showSecondNav }} />
                </div>

                <div className="primaryNav__bot">
                    <div className="primaryNav__bot__photo"></div>
                    <h3>JR Academy</h3>
                </div>
            </div>
        );
    }
}

export default PrimaryNav;