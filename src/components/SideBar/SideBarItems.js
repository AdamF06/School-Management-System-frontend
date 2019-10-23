import React from 'react'

const SideBarItems = (args) => {
    const { icon, iconName } = args
    return (
        <>
               <h2>{icon}</h2>
               <h2>{iconName}</h2>
        </>
    )
}
export default SideBarItems;