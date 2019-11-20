import React from 'react';

const MarkItems = (args) => {
    const { name, score, outOf } = args
    return (
        <>
            <h3>{name}</h3>
            <h3>N/A</h3>
            <h3>N/A</h3>
            <h3>{score}</h3>
            <h3>{outOf}</h3>
        </>
    )
}
export default MarkItems;