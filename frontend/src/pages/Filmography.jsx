import React from 'react'

const Filmography = () => {
  const knownFor = [
    {
      image: 'https://media.themoviedb.org/t/p/w150_and_h225_bestv2/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg',
      title: 'Dilwale Dulhania Le Jayenge '
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
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-2xl font-MontserratAlternate font-semibold underline'>Filmography</h2>
      <div className='flex flex-col gap-2 pl-2'>
        <h4 className='text-md font-semibold'>Known For</h4>
        <div className='relative overflow-auto scroll-smooth pb-3 w-hidden flex gap-3 justify-start'>
          {/* movie card start */}
          {
            knownFor.map((props) => {
              return (
                <div className='flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
                  <img className='rounded-lg object-cover' src={props.image} alt="" />
                  <span className='px-2 text-sm'>{props.title}</span>
                </div>
              )
            })
          }
          {/* movie card end */}
        </div>
      </div>
    </div>
  )
}

export default Filmography