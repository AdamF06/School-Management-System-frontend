import React, { Component } from 'react';
import './Mark.css'
import WeightItems from './WeightItems'
import MarkItems from './MarkItems'
const dummyWeight = [
    {
        name: "Assignment_1",
        weight: '12%'
    },
    {
        name: "Project_1",
        weight: '40%'
    },
    {
        name: "Final Exam",
        weight: '48%'
    },
]
const dummyMark = [
    {
        name: "Assignment_1",
        score:"100%",
        outOf:'12/12'
    },
    {
        name: "Project_1",
        score:"100%",
        outOf:'40/40'       
    },
    {
        name: "Final Exam",
        score:"100%",
        outOf:'48/48'      
    },
    {
        name: "Total",
        score:"100%",    
    },
]

class Mark extends Component {
    state = {}
    render() {
        return (
            <div className="mark">
                <div className='mark__body'>
                    <h1>Grade for Student</h1>
                    <div className='mark__body__table'>
                        <div className="header">
                            <h2>Name</h2>
                            <h2>Due</h2>
                            <h2>Status</h2>
                            <h2>Score</h2>
                            <h2>Out of</h2>
                        </div>

                        {dummyMark.map((item) =>
                            <div className='markitems'>
                                <MarkItems {...item} />
                            </div>
                        )}
                        

                    </div>
                </div>
                <div className="mark__right">
                    <h2>Total: 100% (Competent (CA))</h2>
                    <button>Show All Details</button>
                    <h2>Assignments are weighted by group:</h2>
                    <div className="mark__right__table">
                        <div className="header">
                            <h2>Group</h2>
                            <h2>Weight</h2>
                        </div>

                        {dummyWeight.map((item) =>
                            <div className='weightitems'>
                                <WeightItems {...item} />
                            </div>
                        )}
                    </div>
                    <p>You can view your grades based on What-If
                        scores so that you know how grades will be
                        affected by upcoming or resubmitted assignments.
                        You can test scores for an assignment that already
                        includes a score, or an assignment that has yet to
                        be graded.</p>
                </div>
            </div>
        );
    }
}

export default Mark;