import React from 'react';
import { Paper } from '../../Icon/Icon';

const ListItems = (args) => {
    let { module_name, start_date } = args
    start_date = start_date.split('T').shift()
    console.log(start_date)
    return (
        <div className='moduleItem'>
            <div className="header">
                <div className="header__left">
                    <h1>{module_name}</h1>
                </div>
                <div className="header__right">
                    <h4>{start_date}</h4>
                </div>
            </div>
            <div className="body">
                <div className="body__leftIcon">
                    <h3>{Paper}</h3>
                </div>
                <div className='body__rightInfo'>
                    <h2> {module_name} </h2>
                </div>
            </div>
        </div>
    )
}
export default ListItems;
