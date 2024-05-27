import React, { useEffect, useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/slices/SidebarSlice';
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    //accesing the sidebar state and sidebar function from the sidebar slice via the store
    const sidebarOpen = useSelector((state) => {
        return state.sidebar.isOpen;
    })
    const dispatch = useDispatch();
    const toggleSidebarState = () => {
        dispatch(toggleSidebar(!sidebarOpen));
    }
    const navbarItems = [
        {
            num: 1,
            path: '/',
            title: 'Home'
        },
        {
            num: 2,
            path: '/filmography',
            title: 'Filmography'
        },
        {
            num: 3,
            path: '/about-us',
            title: 'About Us'
        },
        {
            num: 4,
            path: '/more',
            title: 'More'
        },
    ]
    return (
        <div className='sticky top-0 shadow-2xl z-[1000] w-full flex items-center justify-center p-2 bg-navbarBg min-h-14 font-MontserratAlternate'>
            <div className='w-4/5 flex justify-between items-center'>
                <h1 className='font-semibold text-primaryBg text-xl'>All About SRK</h1>
                <ul className='flex w-1/2 gap-1 text-lg justify-between relative h-fit max-laptop:invisible'>
                    {
                        navbarItems.map((props, index) => {
                            return (
                                <NavLink key={index} className={({ isActive }) => [
                                    `py-1 w-1/4 flex justify-center items-center text-primaryBg font-semibold rounded-lg ${isActive && 'bg-primaryBg text-[#4f46e5]'} duration-300 z-[1100] overflow-hidden`
                                ]} to={props.path}>
                                    {props.title}
                                </NavLink>
                            )
                        })
                    }
                </ul>
                <div className={`text-3xl p-1 ${sidebarOpen && 'bg-borderColor text-navbarBg'} rounded-lg duration-500 laptop:fixed laptop:z-[-1000] laptop:invisible`} onClick={toggleSidebarState}>
                    <CgMenuRightAlt />
                </div>
            </div>
        </div>
    )
}

export default Navbar