import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import axios from 'axios';

const Filmography = () => {

  useEffect(() => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
  }, []);
  const knownFor = [
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg',
      title: 'Dilwale Dulhania Le Jayenge'
    },
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/5Y36lCiNyyV71mjq6LavgiggbhT.jpg',
      title: 'My Name Is Khan'
    },
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/lRl7wrJmkOzMTDVYFSIpUcsIjPQ.jpg',
      title: 'Kabhi Khushi Kabhie Gham'
    },
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/5FmtHHDGPofW5Zjns1EM1D8503c.jpg',
      title: 'Kuch Kuch Hota Hai '
    },
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/zhMI6I0kSLnewTMwE0A8Tz3Cj2f.jpg',
      title: 'Kal Ho Naa Ho'
    },
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/oArsQTD4bPPMtRjqr03SO9W6phF.jpg',
      title: 'Om Shanti Om'
    },
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/n853Gvyy5tGz6BujE6jeuVqjXKM.jpg',
      title: 'Devdas'
    },
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/wooHWcyhE0s7Emk55bVbdMrW8gq.jpg',
      title: 'Ra.One'
    },
  ]

  const [allMovies, setAllMovies] = useState([]);
  const fetchAllMovies = async () => {
    const response = await axios.get(`http://localhost:5000/movie/allmovies`);
    setAllMovies(response.data);
  }

  useEffect(() => {
    fetchAllMovies();
  }, []);
  return (
    <div className='flex flex-col gap-3'>
      <h5 className='text-2xl text-center font-MontserratAlternate font-semibold underline'>Filmography</h5>
      <div className='flex flex-col gap-8'>
        {/* known for section starts */}
        <div className='flex flex-col gap-2 pl-2'>
          <div className='flex justify-between'>
            <h4 className='text-xl font-semibold'>Known For</h4>
            <Link to={'/filmography/single-genre'} className='text-sm flex items-center text-brandColor font-semibold'>
              View All
              <MdOutlineArrowForwardIos />
            </Link>
          </div>
          <div className='relative overflow-auto scroll-smooth pb-3 flex gap-3 justify-start'>
            {/* movie card start */}
            {
              knownFor.map((props, index) => {
                return (
                  <Link key={index} to={'/filmography/movie/single-movie'} className='flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
                    <img className='rounded-lg object-cover' src={props.image} alt="" />
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
            <Link to={'/filmography/allMovies'} className='text-sm flex items-center text-brandColor font-semibold'>
              View All
              <MdOutlineArrowForwardIos />
            </Link>
          </div>
          <div className='relative overflow-auto scroll-smooth pb-3 flex gap-3 justify-start'>
            {/* movie card start */}
            {
              allMovies.map((props, index) => {
                return (
                  <Link key={index} to={'/filmography/movie/single-movie'} className='flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
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
            <Link to={'/filmography/single-genre'} className='text-sm flex items-center text-brandColor font-semibold'>
              View All
              <MdOutlineArrowForwardIos />
            </Link>
          </div>
          <div className='relative overflow-auto scroll-smooth pb-3 flex gap-3 justify-start'>
            {/* movie card start */}
            {
              knownFor.map((props, index) => {
                return (
                  <Link key={index} to={'/filmography/movie/single-movie'} className='flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
                    <img className='rounded-lg object-cover' src={props.image} alt="" />
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