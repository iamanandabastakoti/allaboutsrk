import React from 'react'
import AdminSidebar from './AdminSidebar'

const AdminHome = () => {
    return (
        <div className='flex min-h-screen'>
            <AdminSidebar />
            <div className='w-10/12 min-h-full'>
                <div className='p-2 px-6 flex justify-between items-center text-primaryBg bg-navbarBg min-h-12'>
                    {/* <h3 className='text-2xl font-MontserratAlternate font-semibold'>Admin</h3> */}
                    <div className='flex items-center text-center gap-2'>
                        <img className='w-10 h-10 rounded-full' src={import.meta.env.VITE_ADMIN_PIC} alt="Admin Profile Picture" />
                        <h5 className='flex flex-col text-sm'>Welcome <span className='text-2xl font-semibold'>Ananda</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome