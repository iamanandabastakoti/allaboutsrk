import React, { useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import AddMovie from '../movies/AddMovie';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '/public/animations/loading.json';
import Lottie from 'lottie-react';

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

    const [hasMovieLoaded, setMovieLoaded] = useState(false);
    const [addMovieDialog, setAddMovieDialog] = useState(false);
    const addMovieReq = () => {
        setAddMovieDialog(true);
    }

    const [deleteMovieDialog, setDeleteMovieDialog] = useState(false);
    const [toDeleteId, setToDeleteId] = useState(null);
    const deleteMovieReq = (movieID) => {
        setDeleteMovieDialog(true);
        setToDeleteId(movieID);
    }
    const deleteMovie = async () => {
        try {
            await axios.delete(`http://localhost:5000/movie/delete/${toDeleteId}`);
            setDeleteMovieDialog(false);
            toast.success("Movie Deleted Successfully");
            fetchAllMovies();
        } catch (error) {
            console.log("Error deleting movie", error)
            toast.error("Unable to delete the movie!")
        }
    }

    const [allMovies, setAllMovies] = useState([]);
    const fetchAllMovies = async () => {
        setMovieLoaded(false);
        const response = await axios.get(`http://localhost:5000/movie/allmovies`);
        setAllMovies(response.data);
        setTimeout(() => {
            setMovieLoaded(true);
        }, 1000);
    }

    useEffect(() => {
        fetchAllMovies();
    }, []);
    return (
        <div>
            <div className='flex flex-col gap-2 w-full'>
                <div className='flex justify-between px-6'>
                    <h5 className='text-2xl font-semibold'>All Movies</h5>
                    <div className='flex items-center gap-2'>
                        <span className='flex justify-center items-center py-1 px-4 w-fit rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300' onClick={addMovieReq}>
                            <span className='text-xl'>
                                <IoMdAdd />
                            </span>
                            Add Movie
                        </span>
                        <span className='flex justify-center py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300' onClick={fetchAllMovies}>Refresh</span>
                    </div>
                </div>
                {
                    !hasMovieLoaded ?
                        <div className='flex justify-center w-full h-full'>
                            <Lottie animationData={Loading} />
                        </div>
                        :
                        <table className='border-x-2 border-borderColor'>
                            <tr className='bg-brandColor border-x-2 border-brandColor text-primaryBg h-10'>
                                <th className='w-1/3 p-3'>Name</th>
                                <th className='w-1/3 p-3'>Director</th>
                                <th className='w-1/3 p-3'>Action</th>
                            </tr>
                            {
                                allMovies.map((movie, index) => {
                                    return (
                                        <tr key={index} className='text-center h-12 border-b-2 border-borderColor'>
                                            <td className='p-3 font-semibold text-lg'>{movie.title}</td>
                                            <td className='p-3'>{movie.director}</td>
                                            <td className='p-3 flex justify-center gap-2'>
                                                <span className='py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300'>View</span>
                                                <span className='py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300'>Update</span>
                                                <span className='py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300' onClick={() => deleteMovieReq(movie._id)}>Delete</span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                }
            </div>
            {
                addMovieDialog &&
                <AddMovie setAddMovieDialog={setAddMovieDialog} />
            }
            {
                deleteMovieDialog &&
                <div className='fixed top-0 left-0 z-[1000] w-full h-full flex justify-center items-center backdrop-brightness-50'>
                    <div className='min-w-[30vw] w-[30vw] p-4 min-h-60 rounded-lg bg-navbarBg flex flex-col gap-6 justify-center items-center'>
                        <p className='text-lg text-justify text-primaryBg'>Are you sure you want to delete this movie? All of this movie's data will be permanently removed. This action cannot be undone.</p>
                        <div className='flex justify-evenly w-4/5'>
                            <div className='text-primaryBg bg-red-600 cursor-pointer px-6 py-2 text-lg rounded-lg duration-300 hover:brightness-75' onClick={() => setDeleteMovieDialog(false)}>Cancel</div>
                            <div className='text-primaryBg bg-green-600 cursor-pointer px-6 py-2 text-lg rounded-lg duration-300 hover:brightness-75' onClick={() => deleteMovie()}>Confirm</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AdminMovies