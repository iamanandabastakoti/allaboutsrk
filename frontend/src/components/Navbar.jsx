import React from 'react'
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = ({ sidebar, toggleSidebar }) => {
    return (
        <div className='fixed z-[1000] w-full flex items-center justify-between p-2 bg-navbarBg text-primaryBg min-h-12 font-MontserratAlternate  font-semibold text-xl'>
            <h1>All About SRK</h1>
            <div className={`text-3xl p-1 ${sidebar && 'bg-borderColor text-navbarBg'} rounded-lg duration-500`} onClick={() => toggleSidebar()}>
                <CgMenuRightAlt />
            </div>
        </div>
    )
}

export default Navbar