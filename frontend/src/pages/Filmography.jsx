import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import axios from 'axios';

const Filmography = () => {

  useEffect(() => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
  }, []);
  const [knownForMovies, setKnownForMovies] = useState([]);
  const fetchKnownForMovies = async (genre) => {
    const response = await axios.get(`${import.meta.env.VITE_API}/movie/genre/known-for`);
    setKnownForMovies(response.data);
  }
  const [allMovies, setAllMovies] = useState([]);
  const fetchAllMovies = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}/movie/allmovies`);
    setAllMovies(response.data);
  }
  const [actionMovies, setActionMovies] = useState([]);
  const fetchActionMovies = async (genre) => {
    const response = await axios.get(`${import.meta.env.VITE_API}/movie/genre/Action`);
    setActionMovies(response.data);
  }
  useEffect(() => {
    fetchKnownForMovies();
    fetchAllMovies();
    fetchActionMovies();
  }, []);
  return (
    <div className='flex flex-col gap-3'>
      <h5 className='text-2xl text-center font-MontserratAlternate font-semibold underline'>Filmography</h5>
      <div className='flex flex-col gap-8'>
        {/* known for section starts */}
        <div className='flex flex-col gap-2 pl-2'>
          <div className='flex justify-between'>
            <h4 className='text-xl font-semibold'>Known For</h4>
            <Link to={'/filmography/known-for'} className='text-sm flex items-center text-brandColor font-semibold'>
              View All
              <MdOutlineArrowForwardIos />
            </Link>
          </div>
          <div className='relative overflow-auto scroll-smooth pb-3 flex gap-3 justify-start'>
            {/* movie card start */}
            {
              knownForMovies.map((props, index) => {
                return (
                  <Link key={index} to={`/filmography/movie/${props._id}`} className='flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
                    <img className='rounded-lg object-cover' src={props.poster} alt="" />
                    <span className='px-2 text-sm'>{props.title}</span>
                  </Link>
                )
              })
            }
            {/* movie card end */}
          </div>
        </div>
        {/* known for section ends */}
        {/* all movies section starts */}
        <div className='flex flex-col gap-2 pl-2'>
          <div className='flex justify-between'>
            <h4 className='text-xl font-semibold'>All Movies</h4>
            <Link to={'/filmography/allmovies'} className='text-sm flex items-center text-brandColor font-semibold'>
              View All
              <MdOutlineArrowForwardIos />
            </Link>
          </div>
          <div className='relative overflow-auto scroll-smooth pb-3 flex gap-3 justify-start'>
            {/* movie card start */}
            {
              allMovies.map((props, index) => {
                return (
                  <Link key={index} to={`/filmography/movie/${props._id}`} className='flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
                    <img className='rounded-lg object-cover h-56 w-full' src={props.poster} alt="" />
                    <span className='px-2 text-sm'>{props.title}</span>
                  </Link>
                )
              })
            }
            {/* movie card end */}
          </div>
        </div>
        {/* all movies section ends */}
        {/* action movies section starts */}
        <div className='flex flex-col gap-2 pl-2'>
          <div className='flex justify-between'>
            <h4 className='text-xl font-semibold'>Action Movies</h4>
            <Link to={'/filmography/action'} className='text-sm flex items-center text-brandColor font-semibold'>
              View All
              <MdOutlineArrowForwardIos />
            </Link>
          </div>
          <div className='relative overflow-auto scroll-smooth pb-3 flex gap-3 justify-start'>
            {/* movie card start */}
            {
              actionMovies.map((props, index) => {
                return (
                  <Link key={index} to={'/filmography/movie/single-movie'} className='flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
                    <img className='rounded-lg object-cover' src={props.poster} alt="" />
                    <span className='px-2 text-sm'>{props.title}</span>
                  </Link>
                )
              })
            }
            {/* movie card end */}
          </div>
        </div>
        {/* action movies section ends */}
      </div>
    </div>
  )
}

export default Filmography