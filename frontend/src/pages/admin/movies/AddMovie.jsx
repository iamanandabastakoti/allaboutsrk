import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

const AddMovie = ({ setAddMovieDialog }) => {
    const releaseMonths = [
        {
            name: 'January'
        },
        {
            name: 'February'
        },
        {
            name: 'March'
        },
        {
            name: 'April'
        },
        {
            name: 'May'
        },
        {
            name: 'June'
        },
        {
            name: 'July'
        },
        {
            name: 'August'
        },
        {
            name: 'September'
        },
        {
            name: 'October'
        },
        {
            name: 'November'
        },
        {
            name: 'December'
        }
    ];

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
            ></div>
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-h-[100vh] overflow-y-auto z-50 flex flex-col items-center rounded-lg mt-2'>
                <div className='bg-primaryBg text-primaryText overflow-y-auto w-full pb-6'>
                    <div className='flex sticky top-0 bg-primaryBg justify-between items-center p-2 mb-4 shadow-xl px-6'>
                        <div className='flex justify-center text-xl'>Enter the movie details below</div>
                        <span className='p-1 hover:bg-borderColor hover:text- rounded-lg duration-200'>
                            <RxCross1 className='text-xl cursor-pointer' onClick={() => setAddMovieDialog(false)} />
                        </span>
                    </div>
                    <form className='flex flex-col gap-6 px-6'>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Title:</label>
                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the movie title' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Poster:</label>
                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the poster link' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Overview:</label>
                            <textarea className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full resize-none' rows={4} placeholder='Enter the movie overview' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Director:</label>
                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the movie director name' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Cast:</label>
                            <div className='flex items-center gap-2'>
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Cast name' />
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Cast photo' />
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Character name' />
                                <span>
                                    <MdOutlineDelete className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' />
                                </span>
                            </div>
                            <span className='flex justify-end py-1'>
                                <IoMdAdd className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' />
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Release Date:</label>
                            <div className='flex items-center gap-2'>
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Release day' />
                                <select className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full'>
                                    <option>Release month</option>
                                    {
                                        releaseMonths.map((month) => {
                                            return (
                                                <option>{month.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Release year' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Runtime(in minutes):</label>
                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the runtime in minutes' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Genre:</label>
                            <div className='flex items-center gap-2'>
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the genre' />
                                <span>
                                    <MdOutlineDelete className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' />
                                </span>
                            </div>
                            <span className='flex justify-end py-1'>
                                <IoMdAdd className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' />
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Producer:</label>
                            <div className='flex items-center gap-2'>
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the producer name' />
                                <span>
                                    <MdOutlineDelete className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' />
                                </span>
                            </div>
                            <span className='flex justify-end py-1'>
                                <IoMdAdd className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' />
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Production Company:</label>
                            <div className='flex items-center gap-2'>
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the production company name' />
                                <span>
                                    <MdOutlineDelete className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' />
                                </span>
                            </div>
                            <span className='flex justify-end py-1'>
                                <IoMdAdd className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' />
                            </span>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='w-full flex justify-center items-center py-2 px-3 rounded-lg border-2 border-green-600 bg-green-600 text-primaryBg cursor-pointer hover:brightness-75 duration-300'>Confirm</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddMovie