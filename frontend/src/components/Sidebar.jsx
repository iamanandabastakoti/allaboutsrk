import React from 'react'

const Sidebar = ({ sidebar }) => {
    return (
        <div className={`fixed z-[999] top-0 ${sidebar ? 'left-0' : 'left-[-100%]'} duration-500 pt-14 px-3 w-full h-screen bg-brandColor text-primaryBg`}>
            <ul className='flex flex-col gap-1 text-xl'>
                <li className='py-2 px-3 border-b border-borderColor'>Home</li>
                <li className='py-2 px-3 border-b border-borderColor'>Filmography</li>
                <li className='py-2 px-3 border-b border-borderColor'>About Us</li>
                <li className='py-2 px-3 border-b border-borderColor'>More</li>
            </ul>
        </div>
    )
}

export default Sidebar