import React from 'react'

const Items = (args) => {
    const { icon, labelName, placeHolder, changing } = args

    return (
        <div className="item">
            <input
                placeholder={placeHolder}
                onChange={changing}
            ></input>
            <div className="item__label">
                <h2>{icon}</h2>
                <h2>{labelName}</h2>
            </div>
        </div>
    )
}
export default Items;