import React, { Component } from "react";
import {
    Link,
} from "react-router-dom";
export default class CourseThirdNav extends Component {

    state = {
        activeNav: 'home'
    }

    changeLink = (e) => {
        const id = e.target.id
        this.props.changePage(id)
        this.setState({
            activeNav: id
        })
    }

    render() {
        const { activeNav } = this.state
        const { id } = this.props
        return (
            <nav className="courseNav">
                <ul>
                    <li className={activeNav === 'home' ? 'li--active' : 'li--inactive'} >
                        <Link to="/course/id"
                            id="home"
                            onClick={this.changeLink}
                        >Home</Link>
                    </li>
                    <li className={activeNav === 'assignment' ? 'li--active' : 'li--inactive'}>
                        <Link to={`/course/${id}/assignment`}
                            id="assignment"
                            onClick={this.changeLink}
                        >Assignments</Link>
                    </li>
                    <li className={activeNav === 'mark' ? 'li--active' : 'li--inactive'}>
                        <Link to={`/course/${id}/mark`}
                            onClick={this.changeLink}
                        >Marks</Link>
                    </li>
                    <li className={activeNav === 'module' ? 'li--active' : 'li--inactive'}>
                        <Link to={`/course/${id}/module`}
                            id="module"
                            onClick={this.changeLink}
                        >Modules</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}