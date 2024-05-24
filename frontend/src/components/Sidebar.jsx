import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleSidebar } from '../redux/slices/SidebarSlice'

const Sidebar = () => {
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
    //accesing the sidebar state and sidebar function from the sidebar slice via the store
    const sidebarOpen = useSelector((state) => {
        return state.sidebar.isOpen;
    })
    const dispatch = useDispatch();
    const toggleSidebarState = () => {
        dispatch(toggleSidebar(!sidebarOpen));
    }
    return (
        <div className={`fixed z-[999] top-0 ${sidebarOpen ? 'left-0' : 'left-[-100%]'} duration-700 pt-16 px-3 w-full h-screen bg-navbarBg text-primaryBg`}>
            <div className='flex flex-col gap-3 text-xl'>
                {
                    sidebarItems.map((props) => {
                        return (
                            <NavLink className={({ isActive }) => [
                                `py-2 px-2 border-b border-borderColor ${isActive && 'px-5 bg-primaryBg text-brandColor font-semibold rounded-lg'} duration-500`
                            ]} to={props.path} onClick={toggleSidebarState}>
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