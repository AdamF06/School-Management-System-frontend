import React, { Component } from 'react';
import './Assignment.css'
import {
    ArrowRight,
    ArrowDown,
} from '../../Icon/Icon'
import ListItems from '../ListItems/ListItems'

const dummyAss = [
    {
        name: 'Assignment_1',
        point: "-/10Pt"
    }
]
const dummyProject = [
    {
        name: 'Project_1',
        point: "-/40Pt"
    }
]

class Assignment extends Component {
    state = {
        open: true,
        index: -1,
        inputActive: false,
        assignmentArrow:true,
        projectArrow:true

    }
    selected = (index) => {
        this.setState({
            index,
            open: !this.setState.open
        })
        console.log("aaaa", this.state)
    }
    render() {
        const { open, index, assignmentArrow, projectArrow } = this.state
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
                        <div className="assignment__body__ass">
                            <div className="ass__header">
                                <div className="header__left"
                                    onClick={() => this.setState({ open: !this.state.open, index: 0,assignmentArrow:!this.state.assignmentArrow })}
                                >
                                    <dutton className={`arrow ${(index === 0 || index === -1) ? '--select' : ''}${assignmentArrow ? '' : '--arrow-close'}`}
                                    >{ArrowDown} </dutton>
                                    <dutton className={`arrow ${(index === 0 || index === -1) ? '--select' : ''}${assignmentArrow ? '--arrow-close' : ''}`}
                                    >{ArrowRight} </dutton>
                                    <h2>Assignment</h2>
                                </div>
                                <div className="header__right">
                                    <h3>n% of Total</h3>
                                </div>
                            </div>
                            <div className={`ass__list ${(index === 0 || index === -1) ? '--select' : ''}${open ? '' : '--list-close'}`}>
                                {dummyAss.map(
                                    (item) => <ListItems {...item} />
                                )}
                            </div>
                        </div>

                        <div className="assignment__body__project">
                            <div className="project__header">
                                <div className="header__left"
                                    onClick={() => this.setState({ open: !this.state.open, index: 1,projectArrow:!this.state.projectArrow })}
                                >
                                    <dutton className={`arrow ${(index === 1 || index === -1) ? '--select' : ''}${projectArrow ? '' : '--arrow-close'}`}
                                    >{ArrowDown} </dutton>
                                    <dutton className={`arrow ${(index === 1 || index === -1) ? '--select' : ''}${projectArrow ? '--arrow-close' : ''}`}
                                    >{ArrowRight} </dutton>
                                    <h2>Project</h2>
                                </div>
                                <div className="header__right">
                                    <h3>n% of Total</h3>
                                </div>
                            </div>
                            <div className={`project__list ${(index === 1 || index === -1) ? '--select' : ''}${open ? '' : '--list-close'}`}>
                                {dummyProject.map(
                                    (item) => <ListItems {...item} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Assignment;