import React from 'react';
import {File} from  '../Icon/Icon'
const DashboardCard = (args) => {
    const { course_ID, course_name, season } = args
    return (

        <div className="dashboardCard">
            <div className="dashboardCard__header">
                <h3>{course_ID}</h3>
                <h2>{course_name}</h2>
            </div>
            <div className="dashboardCard__info">

                <h4 className="ellipsis">{course_ID}   {course_name}</h4>
                <h3 className="ellipsis">{season}</h3>
            </div>
            <div className="dashboardCard__action">
                <button> {File} </button>
            </div>
        </div>
    )
}

export default DashboardCard