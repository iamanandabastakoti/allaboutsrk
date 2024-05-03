import React, { useEffect, useState } from 'react'
import { SlLogout } from "react-icons/sl";
import { RxDashboard } from "react-icons/rx";
import { ImFilm } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAdmin, toggleAdminSidebarListNum, } from '../../redux/slices/AdminSlice';

const AdminSidebar = () => {
    const sidebarLists = [
        {
            logo: <RxDashboard />,
            name: 'Dashboard',
            number: 1
        },
        {
            logo: <ImFilm />,
            name: 'Movies',
            number: 2
        },
        {
            logo: <FaUsers />,
            name: 'Users',
            number: 3
        },
        {
            logo: <TiMessages />,
            name: 'Messages',
            number: 4
        },
    ]
    const dispatch = useDispatch();
    const adminLogOut = () => {
        dispatch(logOutAdmin());
        localStorage.removeItem('authData');
    }
    const adminSidebarListNumber = useSelector((state) => {
        return state.admin.adminSidebarListNum;
    })

    const [logoutReq, setLogOutReq] = useState(false);
    const toggleLogOutReq = () => {
        setLogOutReq(!logoutReq)
    }
    const toggleAdminSidebarListNumber = (payload) => {
        dispatch(toggleAdminSidebarListNum(payload));
    }
    return (
        <div className='fixed w-2/12 min-h-full flex flex-col items-start justify-between bg-brandColor text-primaryBg'>
            <div className='flex flex-col w-full justify-start'>
                <div className='flex items-center justify-center min-h-24 w-full p-4 gap-2'>
                    <img className='w-10 h-10 rounded-full' src="/ddlj_srk.jpeg" alt="" />
                    <Link to={'/'} className='text-xl font-MontserratAlternate font-semibold flex justify-center items-center'>All About SRK</Link>
                </div>
                <div className='flex flex-col items-centermin-h-40 w-full pt-4'>
                    <ul className='pl-10 px-6 flex flex-col gap-5 w-full'>
                        {
                            sidebarLists.map((props) => {
                                return (
                                    <li className={`flex justify-start px-2 items-center gap-2 cursor-pointer ${adminSidebarListNumber === props.number ? 'bg-borderColor text-brandColor scale-105' : 'hover:bg-borderColor hover:text-brandColor hover:scale-110 text-primaryBg'} duration-300 w-full rounded-lg min-h-10 text-xl`} onClick={() => toggleAdminSidebarListNumber(props.number)}>
                                        <span>{props.logo}</span>
                                        <span>{props.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center text-xl min-h-20 w-full px-6 pl-10'>
                <div className='w-full rounded-lg min-h-10 flex justify-start px-2 items-center gap-2 cursor-pointer hover:bg-borderColor hover:text-brandColor hover:scale-105 duration-300' onClick={toggleLogOutReq}>
                    <SlLogout />
                    <span>Log Out</span>
                </div>
            </div>
            {
                logoutReq &&
                <div className='fixed w-full h-full flex justify-center items-center backdrop-brightness-50'>
                    <div className='min-w-[30vw] min-h-60 rounded-lg bg-brandColor flex flex-col gap-6 justify-center items-center'>
                        <p className='text-3xl font-semibold'>Do you want to logout?</p>
                        <div className='flex justify-evenly w-4/5'>
                            <div className='text-primaryBg bg-red-600 cursor-pointer px-6 py-2 text-lg rounded-lg duration-300 hover:scale-110' onClick={toggleLogOutReq}>Cancel</div>
                            <div className='text-primaryBg bg-green-600 cursor-pointer px-6 py-2 text-lg rounded-lg duration-300 hover:scale-110' onClick={adminLogOut}>Confirm</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AdminSidebar