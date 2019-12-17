import React, { Component } from 'react';
import './Assignment.css'
import {
    ArrowRight,
    ArrowDown,
} from '../../Icon/Icon'
import { Link } from 'react-router-dom'
import ListItems from '../ListItems/ListItems'

class Assignment extends Component {
    state = {
        index: -1,
        inputActive: false,
        assignmentArrow: true,
        projectArrow: true,
        assignmentList: true,
        projectList: true

    }
    selected = (index) => {
        this.setState({
            index,
            open: !this.setState.open
        })
        console.log("aaaa", this.state)
    }
    render() {
        const { index, assignmentArrow, projectArrow, assignmentList, projectList } = this.state
        const { id, project, assignment } = this.props
        return (
            <div className='assignmentContainer'>

                <div className="assignment">
                    <div className="assignment__header">
                        <input className={`${this.state.inputActive ? 'input--active' : ''}`}
                            placeholder="Search for assignment"
                            onClick={() => this.setState({ inputActive: true })}
                            onBlur={() => this.setState({ inputActive: false })}
                        ></input>
                    </div>

                    <div className="assignment__body">
                        <div className="assignment__body__assignments">
                            <div className="assignments__header">
                                <div className="header__left"
                                    onClick={() => this.setState({
                                        index: 0,
                                        assignmentArrow: !this.state.assignmentArrow,
                                        assignmentList: !this.state.assignmentList
                                    })}
                                >
                                    <button className={`arrow ${(index === 0 || index === -1) ? '--select' : ''}${assignmentArrow ? '' : '--arrow-close'}`}
                                    >{ArrowDown} </button>
                                    <button className={`arrow ${(index === 0 || index === -1) ? '--select' : ''}${assignmentArrow ? '--arrow-close' : ''}`}
                                    >{ArrowRight} </button>
                                    <h2>Assignment</h2>
                                </div>
                                <div className="header__right">
                                    <h3>n% of Total</h3>
                                </div>
                            </div>
                            {
                                assignment.map((item, index) =>
                                    <Link key={index} to={`/course/${id}/assignment/assignment-${item.No}`}>
                                        <div className={`assignments__list ${assignmentList ? '' : '--listclose'}`}>
                                            <ListItems {...item} />
                                        </div>
                                    </Link>
                                )
                            }

                        </div>

                        <div className="assignment__body__project">
                            <div className="project__header">
                                <div className="header__left"
                                    onClick={() => this.setState({
                                        index: 1,
                                        projectArrow: !this.state.projectArrow,
                                        projectList: !this.state.projectList
                                    })}
                                >
                                    <button className={`arrow ${(index === 1 || index === -1) ? '--select' : ''}${projectArrow ? '' : '--arrow-close'}`}
                                    >{ArrowDown} </button>
                                    <button className={`arrow ${(index === 1 || index === -1) ? '--select' : ''}${projectArrow ? '--arrow-close' : ''}`}
                                    >{ArrowRight} </button>
                                    <h2>Project</h2>
                                </div>
                                <div className="header__right">
                                    <h3>n% of Total</h3>
                                </div>
                            </div>
                            {
                                project.map((item, index) =>
                                    <Link key={index} to={`/course/${id}/assignment/project-${item.No}`}>
                                        <div className={`project__list ${projectList ? '' : '--listclose'}`}>
                                            <ListItems {...item} />
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Assignment;