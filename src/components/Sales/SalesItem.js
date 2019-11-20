import React from 'react'

const SaleItems = (args) => {
    const { courseName, amount, dutDate } = args
    return (
        <div className="item">
            <div className="item__left">
                <h2> {courseName} </h2>
            </div>
            <div className="item__right">
                <h2> {amount} </h2>
                <h2> {dutDate} </h2>
            </div>
        </div>
    )
}
export default SaleItems;