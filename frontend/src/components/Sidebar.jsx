import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({ sidebar, toggleSidebar }) => {
    const sidebarItems = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/filmography',
            title: 'Filmography'
        },
        {
            path: '/about-us',
            title: 'About Us'
        },
        {
            path: '/more',
            title: 'More'
        },
    ]
    return (
        <div className={`fixed z-[999] top-0 ${sidebar ? 'left-0' : 'left-[-100%]'} duration-700 pt-16 px-3 w-full h-screen bg-[#32127A] text-primaryBg`}>
            <div className='flex flex-col gap-3 text-xl'>
                {
                    sidebarItems.map((props) => {
                        return (
                            <NavLink className={({ isActive }) => [
                                `py-2 px-2 border-b border-borderColor ${isActive && 'px-3 border-b-4 border-l-4'} duration-500`
                            ]} to={props.path} onClick={() => toggleSidebar()}>
                                {props.title}
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar