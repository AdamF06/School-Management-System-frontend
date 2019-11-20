import React from 'react';

const WeightItems = (args) => {
    const { name, weight } = args
    return (
        <>
            <h3>{name}</h3>
            <h3>{weight}</h3>
        </>
    )
}
export default WeightItems;