import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleGenre = () => {
  const knownFor = [
    {
      poster: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg',
      title: 'Dilwale Dulhania Le Jayenge'
    },
    {
      poster: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/5Y36lCiNyyV71mjq6LavgiggbhT.jpg',
      title: 'My Name Is Khan'
    },
    {
      poster: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/lRl7wrJmkOzMTDVYFSIpUcsIjPQ.jpg',
      title: 'Kabhi Khushi Kabhie Gham'
    },
    {
      poster: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/5FmtHHDGPofW5Zjns1EM1D8503c.jpg',
      title: 'Kuch Kuch Hota Hai '
    },
    {
      poster: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/zhMI6I0kSLnewTMwE0A8Tz3Cj2f.jpg',
      title: 'Kal Ho Naa Ho'
    },
    {
      poster: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/oArsQTD4bPPMtRjqr03SO9W6phF.jpg',
      title: 'Om Shanti Om'
    },
    {
      poster: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/n853Gvyy5tGz6BujE6jeuVqjXKM.jpg',
      title: 'Devdas'
    },
    {
      poster: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/wooHWcyhE0s7Emk55bVbdMrW8gq.jpg',
      title: 'Ra.One'
    },
  ]
  const { singleGenre } = useParams();

  const [genreMovies, setGenreMovies] = useState([]);
  const fetchAllMovies = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}/movie/allmovies`);
    setGenreMovies(response.data);
  }
  const fetchSpecificGenreMovies = async (genre) => {
    const genreName = genre.charAt(0).toUpperCase() + genre.slice(1)
    const response = await axios.get(`${import.meta.env.VITE_API}/movie/genre/${genreName}`);
    setGenreMovies(response.data);
  }
  useEffect(() => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
    if (singleGenre === 'allmovies') {
      fetchAllMovies();
    } else {
      // setGenreMovies(knownFor);
      fetchSpecificGenreMovies(singleGenre)
    }
  }, []);
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-xl text-brandColor font-semibold laptop:text-3xl'>Known For</h3>
      <div className='flex flex-col gap-4 laptop:items-center'>
        {/* movie card starts */}
        {
          genreMovies.map((props, index) => {
            return (
              <Link key={index} to={`/filmography/movie/${props._id}`} className='border border-borderColor rounded-lg p-2 flex gap-2 overflow-hidden text-gray-600 laptop:w-3/5 laptop:hover:shadow-2xl shadow-sm'>
                <img className='w-2/6 h-44 object-cover laptop:object-contain laptop:h-60' src={props.poster} alt="poster" />
                <div className='flex flex-col justify-around text-sm'>
                  <h5 className='font-semibold text-xl text-brandColor'>{props.title}</h5>
                  <div>
                    {
                      props.release_date?.map((release, index) => {
                        return (
                          <div key={index} className='flex gap-1 items-center'>
                            <span>{release.date}</span>
                            <span>{release.month}</span>
                            <span>{release.year}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className='flex gap-3'>
                    {
                      props.genre?.map((genres, index) => {
                        return (
                          <span key={index}>{genres.name}</span>
                        )
                      })
                    }
                  </div>
                  {
                    props.director ?
                      <div className='flex items-center gap-2'>
                        Director<span className='text-lg'>{props.director}</span>
                      </div>
                      :
                      <div>More data will come</div>
                  }
                </div>
              </Link>
            )
          })
        }
        {/* movie card starts */}
      </div>
    </div>
  )
}

export default SingleGenre