import React from 'react'

const SideBarItems = (args) => {
    const { icon, iconName } = args
    return (
        <>
            <button>
               <h2>{icon}</h2>
            </button>
            <h2>{iconName}</h2>
        </>
    )
}
export default SideBarItems;