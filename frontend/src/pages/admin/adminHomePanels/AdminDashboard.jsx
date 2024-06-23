import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUsers } from "react-icons/fa";
import { ImFilm } from "react-icons/im";
import { TiMessages } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { toggleAdminSidebarListNum } from '../../../redux/slices/AdminSlice';

const AdminDashboard = () => {
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
    ]
    const dashboardUser = [
        {
            name: 'Virat Kohli',
            joined: '3rd May, 2024',
        },
        {
            name: 'Ananda Bastakoti',
            joined: '2nd May, 2024',
        },
        {
            name: 'Shah Rukh Khan',
            joined: '1st May, 2024',
        },
    ]

    const [totalMovies, setTotalMovies] = useState(null);
    const [totalMessages, setTotalMessages] = useState(null);
    const fetchData = async () => {
        const moviedata = await axios.get(`${import.meta.env.VITE_API}/movie/allmovies`);
        const messageData = await axios.get(`${import.meta.env.VITE_API}/message`);
        setTotalMovies(moviedata.data.length);
        setTotalMessages(messageData.data.length);

    }

    const dashboardCards = [
        {
            icon: <ImFilm />,
            stats: totalMovies,
            title: 'Total Movies',
            number: 2,
        },
        {
            icon: <FaUsers />,
            stats: '10,000',
            title: 'Total Users',
            number: 3,
        },
        {
            icon: <TiMessages />,
            stats: totalMessages,
            title: 'Total Messages',
            number: 4,
        },
    ]

    const dispatch = useDispatch();
    const toggleAdminSidebarListNumber = (payload) => {
        dispatch(toggleAdminSidebarListNum(payload));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='flex flex-col items-start text-brandColor gap-6'>
            <h3 className='text-2xl font-semibold'>Website Stats</h3>
            <div className='flex justify-evenly w-full'>
                {/*dashboards cards */}
                {
                    dashboardCards.map((props) => {
                        return (
                            <div className='min-w-60 w-1/5 min-h-40 cursor-pointer shadow-[5px_5px_50px_#a4a4a4,-5px_-5px_50px_#ffffff] hover:brightness-90 rounded-xl p-6 flex flex-col gap-3' onClick={() => toggleAdminSidebarListNumber(props.number)}>
                                <span className='text-3xl text-center'>
                                    {props.icon}
                                </span>
                                <h5 className='text-4xl font-semibold'>{props.stats}</h5>
                                <span className='font-semibold'>{props.title}</span>
                            </div>
                        )
                    })
                }
            </div>
            {/* dashboard-movies */}
            <div className='flex flex-col gap-2 w-full'>
                <h5 className='text-xl font-semibold'>Movies</h5>
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
                                    <td className='p-3'>{movie.name}</td>
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
            {/* dashboard-users */}
            <div className='flex flex-col gap-2 w-full'>
                <h5 className='text-xl font-semibold'>Users</h5>
                <table className='border-x-2 border-borderColor'>
                    <tr className='bg-brandColor border-x-2 border-brandColor text-primaryBg'>
                        <th className='w-1/3 p-3'>Name</th>
                        <th className='w-1/3 p-3'>Joined</th>
                        <th className='w-1/3 p-3'>Action</th>
                    </tr>
                    {
                        dashboardUser.map((user) => {
                            return (
                                <tr className='text-center border-b-2 border-borderColor'>
                                    <td className='p-3'>{user.name}</td>
                                    <td className='p-3'>{user.joined}</td>
                                    <td className='p-3 flex justify-center gap-2'>
                                        <span className='w-32 py-1 px-3 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300'>View User</span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default AdminDashboard