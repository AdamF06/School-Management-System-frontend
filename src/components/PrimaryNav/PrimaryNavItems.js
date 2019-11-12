import React from 'react'

const PrimaryNavItems = (args) => {
    const { icon, iconName } = args
    return (
        <>
               <h2>{icon}</h2>
               <h2>{iconName}</h2>
        </>
    )
}
export default PrimaryNavItems;