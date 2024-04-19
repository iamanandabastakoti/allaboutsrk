import React, { useContext } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { sidebarContext } from '../context/context';

const Navbar = () => {
    const value = useContext(sidebarContext);
    return (
        <div className='fixed z-[1000] w-full flex items-center justify-between p-2 bg-navbarBg text-primaryBg min-h-12 font-MontserratAlternate  font-semibold text-xl'>
            <h1>All About SRK</h1>
            <div className={`text-3xl p-1 ${value.sidebar && 'bg-borderColor text-navbarBg'} rounded-lg duration-500`} onClick={() => value.setSidebar(!value.sidebar)}>
                <CgMenuRightAlt />
            </div>
        </div>
    )
}

export default Navbar