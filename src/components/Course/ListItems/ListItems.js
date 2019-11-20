import React from 'react';
import { Rocket } from '../../Icon/Icon';

const ListItems = (args) => {
    const { name, point } = args
    return (
        <>
            <div className="leftIcon">
                <h3>{Rocket}</h3>
            </div>
            <div className='rightInfo'>
                <h2> {name} </h2>
                <h4> {point} </h4>
            </div>
        </>
    )
}
export default ListItems;
