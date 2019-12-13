import React from 'react'

const Items = (args) => {
    const { icon, labelName,placeHolder } = args
    return (
        <div className="item">
            <div className="item__label">
                <h2>{icon}</h2>
                <h2>{labelName}</h2>
            </div>
            <input placeholder={placeHolder}></input>
        </div>
    )
}
export default Items;