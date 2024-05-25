import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { useSelector } from 'react-redux';
import AdminDashboard from './adminHomePanels/AdminDashboard';
import AdminMovies from './adminHomePanels/AdminMovies';
import AdminMessages from './adminHomePanels/AdminMessages';
import AdminUsers from './adminHomePanels/AdminUsers';

const AdminHome = () => {
    const adminSidebarListNum = useSelector((state) => {
        return state.admin.adminSidebarListNum;
    })
    const adminPanelItems = [
        {
            number: 1,
            name: <AdminDashboard />,
        },
        {
            number: 2,
            name: <AdminMovies />,
        },
        {
            number: 3,
            name: <AdminUsers />,
        },
        {
            number: 4,
            name: <AdminMessages />,
        },
    ]
    return (
        <div className='flex min-h-screen bg-[#F0F8FF]'>
            <AdminSidebar />
            <div className='w-full min-h-full'>
                <div className='sticky top-0 shadow-2xl z-50 p-2 px-6 flex justify-between items-center text-primaryBg bg-navbarBg min-h-12'>
                    {/* <h3 className='text-2xl font-MontserratAlternate font-semibold'>Admin</h3> */}
                    <div className='flex items-center text-center gap-2'>
                        <img className='w-10 h-10 rounded-full' src={import.meta.env.VITE_ADMIN_PIC} alt="Admin Profile Picture" />
                        <h5 className='flex flex-col text-sm'>Welcome <span className='text-2xl font-semibold'>Ananda</span></h5>
                    </div>
                </div>
                <div className='px-4 py-6'>
                    {
                        adminPanelItems.map((props) => {
                            return (
                                adminSidebarListNum === props.number &&
                                props.name
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default AdminHome