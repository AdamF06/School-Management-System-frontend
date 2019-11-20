import React from 'react';
import { Paper } from '../../Icon/Icon';

const ListItems = (args) => {
    const { name, date } = args
    return (
        <div className='moduleItem'>
            <div className="header">
                <div className="header__left">
                    <h1>{name}</h1>
                </div>
                <div className="header__right">
                    <h4>{date}</h4>
                </div>
            </div>
            <div className="body">
                <div className="body__leftIcon">
                    <h3>{Paper}</h3>
                </div>
                <div className='body__rightInfo'>
                    <h2> {name} </h2>
                </div>
            </div>
        </div>
    )
}
export default ListItems;
