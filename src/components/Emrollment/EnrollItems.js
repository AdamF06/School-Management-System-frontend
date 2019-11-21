import React from 'react';
import { Star } from '../Icon/Icon'

const EnrollItems = (args) => {
    const { name, starPt, startDate } = args
    const stars = []

    for (let i = 0; i < starPt; i++) {
        stars.push(<div>{Star}</div>)
    }

    return (

        <div className="courseitems">
            <div className='left'><h2> {name} </h2></div>
            <div className="right">
                <h3>{startDate} </h3>
                <h4>{stars} </h4>
            </div>
        </div>
    )
}
export default EnrollItems;