import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SingleGenre = () => {
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

  useEffect(() => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
  }, []);
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-xl text-brandColor font-semibold'>Known For</h3>
      <div className='flex flex-col gap-4'>
        {/* movie card starts */}
        {
          knownFor.map((props) => {
            return (
              <Link to={'/filmography/movie/single-movie'} className='border border-borderColor rounded-lg p-2 flex gap-2 overflow-hidden text-gray-600'>
                <img className='w-2/6 h-44 object-cover' src={props.image} alt="poster" />
                <div className='flex flex-col justify-around text-sm'>
                  <h5 className='font-semibold text-xl text-brandColor'>{props.title}</h5>
                  <span>20 October 1995</span>
                  <div className='flex gap-3'>
                    <span>Classical</span>
                    <span>Drama</span>
                    <span>Romance</span>
                  </div>
                  <div className='text-base'>
                    SRK as <span className='text-sm'>Raj Malhotra</span>
                  </div>
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