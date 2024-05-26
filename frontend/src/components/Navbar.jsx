import React, { useState } from 'react'
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
    const path = useLocation();
    const [itemNum, setItemNum] = useState(path.pathname);
    return (
        <div className='sticky top-0 shadow-2xl z-[1000] w-full flex items-center justify-center p-2 bg-navbarBg min-h-14 font-MontserratAlternate text-xl'>
            <div className='w-4/5 flex justify-between items-center'>
                <h1 className='font-semibold text-primaryBg'>All About SRK</h1>
                <ul className='flex w-3/5 justify-between relative h-fit'>
                    {
                        navbarItems.map((props, index) => {
                            return (
                                <NavLink key={index} className={({ isActive }) => [
                                    `py-1 w-1/4 flex justify-center items-center text-primaryBg font-semibold rounded-lg ${isActive && 'text-primaryText'} z-[1100]`
                                ]} to={props.path} onClick={() => setItemNum(props.path)}>
                                    {props.title}
                                </NavLink>
                            )
                        })
                    }
                    <div className={`bg-primaryBg w-1/4 h-full absolute ${itemNum === '/' ? 'left-1' : itemNum === '/filmography' ? 'left-1/4' : itemNum === '/about-us' ? 'left-2/4' : itemNum === '/more' && 'left-3/4'} rounded-lg z-[1090] duration-300`}>
                    </div>
                </ul>
                <div className={`text-3xl p-1 ${sidebarOpen && 'bg-borderColor text-navbarBg'} rounded-lg duration-500 laptop:fixed laptop:z-[-1000] laptop:invisible`} onClick={toggleSidebarState}>
                    <CgMenuRightAlt />
                </div>
            </div>
        </div>
    )
}

export default Navbar