import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
    const { movieID } = useParams();

    const [singleMovie, setSingleMovie] = useState([]);
    const [movieCast, setMovieCast] = useState([]);
    const [release, setRelease] = useState([]);
    const [genre, setGenre] = useState([]);
    const [producer, setProducer] = useState([]);
    const [production, setProduction] = useState([]);

    const fetchSingleMovie = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API}/movie/singlemovie/${movieID}`);
            setSingleMovie(response.data);
            // console.log(singleMovie);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchSingleMovie();
        window.scrollTo({ top: '0', behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if (singleMovie && singleMovie.cast && singleMovie.release_date && singleMovie.genre && singleMovie.producer && singleMovie.production_company) {
            setMovieCast(singleMovie.cast);
            setRelease(singleMovie.release_date);
            setGenre(singleMovie.genre);
            setProducer(singleMovie.producer);
            setProduction(singleMovie.production_company);
        }
    }, [singleMovie])
    return (
        <div>
            <div className='laptop:flex laptop:gap-4 laptop:w-full laptop:mb-4'>
                <div className='overflow-hidden relative flex max-laptop:justify-center items-center w-full min-h-60 laptop:h-fit laptop:w-1/4'>
                    <img className='left-2 relative z-50 w-40 max-laptop:mb-2 h-auto object-contain laptop:h-full laptop:w-full' src={singleMovie.poster} alt="main-poster" />
                </div>
                <div className='laptop:flex laptop:flex-col laptop:items-start laptop:gap-10 laptop:p-2 laptop:h-full laptop:w-3/4'>
                    <h4 className='text-xl text-center font-semibold laptop:text-3xl'>{singleMovie.title}</h4>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-lg laptop:text-2xl'>Overview</span>
                        <span className='text-justify laptop:text-lg'>{singleMovie.overview}</span>
                    </div>
                    <div className='flex flex-col laptop:text-lg max-laptop:py-2 max-laptop:flex-col-reverse'>
                        <span className='laptop:font-semibold'>{singleMovie.director}</span>
                        <span className='max-laptop:font-semibold'>Director</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <span className='text-lg font-semibold'>Cast</span>
                    <div className='relative overflow-auto scroll-smooth pb-3 flex gap-3 justify-start'>
                        {
                            movieCast.map((props, index) => {
                                return (
                                    <div key={index} className='flex flex-col items-start gap-2 min-h-56 min-w-36 max-w-36 overflow-hidden rounded-lg bg-borderColor p-1'>
                                        <img className='rounded-lg object-cover w-full h-3/5 bg-gray-500' src='https://imgs.search.brave.com/ww5k7GZKu3CaMGwAsbPlFlyM7ogaHe2ZnHdOvxrz9kE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc' alt="Image" />
                                        <div className='flex flex-col'>
                                            <span className='px-2 text-md'>{props.name}</span>
                                            <span className='px-2 text-sm text-gray-500'>{props.role}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>Release Date</span>
                        {
                            release.map((props, index) => {
                                return (
                                    <div key={index} className='text-sm text-gray-600 px-2 flex items-center gap-1'>
                                        <span>{props.date}</span>
                                        <span>{props.month}</span>
                                        <span>{props.year}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>Runtime</span>
                        <span className='text-sm text-gray-600 px-2'>{singleMovie.runtime} minutes</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>Genre</span>
                        <div className='text-sm text-gray-600 px-2 flex gap-3'>
                            {
                                genre.map((props, index) => {
                                    return (
                                        <span key={index}>{props.name}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>Producer</span>
                        <div className='text-sm text-gray-600 px-2 flex gap-4'>
                            {
                                producer.map((props, index) => {
                                    return (
                                        <span key={index}>
                                            {
                                                props.name !== '' ?
                                                    <span>{props.name}</span> : <span>No data</span>
                                            }
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>Production Company</span>
                        <div className='text-sm text-gray-600 px-2 flex gap-4'>
                            {
                                production.map((props, index) => {
                                    return (
                                        <span key={index}>
                                            {
                                                props.name !== '' ?
                                                    <span>{props.name}</span> : <span>No data</span>
                                            }
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleMovie