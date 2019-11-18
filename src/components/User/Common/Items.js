import React from 'react'

const Items = (args) => {
    const { icon, labelName } = args
    return (
        <div className="item">
            <div className="item__label">
                <h2>{icon}</h2>
                <h2>{labelName}</h2>
            </div>
            <input></input>
        </div>
    )
}
export default Items;