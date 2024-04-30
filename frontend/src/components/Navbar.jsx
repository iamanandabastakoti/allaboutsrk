import React from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/slices/SidebarSlice';

const Navbar = () => {
    //accesing the sidebar state and sidebar function from the sidebar slice via the store
    const sidebarOpen = useSelector((state) => {
        return state.sidebar.isOpen;
    })
    const dispatch = useDispatch();
    const toggleSidebarState = () => {
        dispatch(toggleSidebar(!sidebarOpen));
    }
    return (
        <div className='fixed z-[1000] w-full flex items-center justify-between p-2 bg-navbarBg text-primaryBg min-h-12 font-MontserratAlternate  font-semibold text-xl'>
            <h1>All About SRK</h1>
            <div className={`text-3xl p-1 ${sidebarOpen && 'bg-borderColor text-navbarBg'} rounded-lg duration-500`} onClick={toggleSidebarState}>
                <CgMenuRightAlt />
            </div>
        </div>
    )
}

export default Navbar