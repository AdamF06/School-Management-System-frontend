import React from 'react';
import { Right } from '../Icon/Icon'
const DropItems = (args) => {
    const { icon, name } = args
    return (
        <div className="dropitems">
            <div className="left">
                <h4> {icon} </h4>
                <h4> {name} </h4>
            </div>
            <div className="right">
                <h4> {Right} </h4>
            </div>
        </div>
    )
}
export default DropItems;