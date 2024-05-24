import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const ViewMessage = ({ setViewMessage, singleMessageContent, deleteSingleMessage }) => {
    const deleteMessage = () => {
        deleteSingleMessage(singleMessageContent?._id);
        setViewMessage(false);
    }
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50" onClick={() => setViewMessage(false)}></div >
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-h-[80vh] overflow-y-auto z-50 flex flex-col items-center rounded-lg'>
                <div className='bg-primaryBg text-primaryText overflow-y-auto w-full pb-6 min-h-[40vh]'>
                    <div className='flex sticky top-0 bg-primaryBg justify-between items-center p-2 mb-4 shadow-xl px-6'>
                        <div className='flex items-center gap-2'>
                            <FaRegUserCircle className='text-5xl text-buttonColor' />
                            <div className='flex flex-col'>
                                <span className='text-lg'>{singleMessageContent?.name}</span>
                                <span className='text-sm text-gray-500'>{singleMessageContent?.email}</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdDelete className='hover:bg-borderColor p-2 rounded-full text-4xl cursor-pointer' onClick={() => deleteMessage()} />
                            <RxCross1 className='hover:bg-borderColor p-2 rounded-full text-4xl cursor-pointer' onClick={() => setViewMessage(false)} />
                        </div>
                    </div>
                    <div className='px-6'>
                        <span className='font-semibold'>Message:</span>
                        <p>
                            {singleMessageContent?.message}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewMessage