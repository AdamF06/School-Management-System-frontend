import React from 'react';
import { Rocket } from '../../Icon/Icon';

const ListItems = (args) => {
    const{assignment_name, marks} = args
    return (
        <>
            <div className="leftIcon">
                <h3>{Rocket}</h3>
            </div>
            <div className='rightInfo'>
                <h2> {assignment_name} </h2>
                <h4> -/{marks}Pt </h4>
            </div>
        </>
    )
}
export default ListItems;
