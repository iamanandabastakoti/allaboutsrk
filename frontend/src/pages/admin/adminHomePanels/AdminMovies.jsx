import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import AddMovie from '../movies/AddMovie';

const AdminMovies = () => {
    const dashboardMovies = [
        {
            name: 'Dunki',
            releaseDate: '22nd December, 2023',
        },
        {
            name: 'Jawan',
            releaseDate: '7th September, 2023',
        },
        {
            name: 'Pathaan',
            releaseDate: '25th January, 2023',
        },
        {
            name: 'Dunki',
            releaseDate: '22nd December, 2023',
        },
        {
            name: 'Jawan',
            releaseDate: '7th September, 2023',
        },
        {
            name: 'Pathaan',
            releaseDate: '25th January, 2023',
        },
    ]
    const [addMovieDialog, setAddMovieDialog] = useState(false);
    const addMovieReq = () => {
        setAddMovieDialog(true);
    }
    return (
        <div>
            <div className='flex flex-col gap-2 w-full'>
                <div className='flex justify-between px-6'>
                    <h5 className='text-xl font-semibold'>All Movies</h5>
                    <span className='flex justify-center items-center py-1 px-4 w-fit rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300' onClick={addMovieReq}>
                        <span className='text-xl'>
                            <IoMdAdd />
                        </span>
                        Add Movie
                    </span>
                </div>
                <table className='border-x-2 border-borderColor'>
                    <tr className='bg-brandColor border-x-2 border-brandColor text-primaryBg h-10'>
                        <th className='w-1/3 p-3'>Name</th>
                        <th className='w-1/3 p-3'>Release Date</th>
                        <th className='w-1/3 p-3'>Action</th>
                    </tr>
                    {
                        dashboardMovies.map((movie) => {
                            return (
                                <tr className='text-center h-12 border-b-2 border-borderColor'>
                                    <td className='p-3 font-semibold text-lg'>{movie.name}</td>
                                    <td className='p-3'>{movie.releaseDate}</td>
                                    <td className='p-3 flex justify-center gap-2'>
                                        <span className='py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300'>View</span>
                                        <span className='py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300'>Update</span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            {
                addMovieDialog &&
                <AddMovie setAddMovieDialog={setAddMovieDialog} />
            }
        </div>
    )
}

export default AdminMovies