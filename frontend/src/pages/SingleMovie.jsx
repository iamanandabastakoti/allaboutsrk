import React from 'react'

const SingleMovie = () => {
    const movieCast = [
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/tCEppfUu0g2Luu0rS5VKMoL4eSw.jpg',
            name: 'Shah Rukh Khan',
            character: 'Raj Malhotra',
        },
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/h4m0TkDuEMCUNaPrQxMRyFb2AQ7.jpg',
            name: 'Kajol',
            character: 'Simran Singh',
        },
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/uhMGFS7tuG71LDv2wk9LfZZ4EG6.jpg',
            name: 'Amrish Puri',
            character: 'Chaudhry Baldev Singh',
        },
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/tJdqL4BRSAWVFX1W6cmwxFs9IFh.jpg',
            name: 'Farida Jalal',
            character: "Lajwanti 'Lajjo' Singh",
        },
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/f7hWJ4tvzR7uXmYoTiB41TpQ2NZ.jpg',
            name: 'Anupam Kher',
            character: 'Dharamvir Malhotra',
        },
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/evHnj6s0Z2sbV1Mq0dfXxQQU8Mf.jpg',
            name: 'Pooja Ruparel',
            character: "Rajeshwari 'Chutki' Singh",
        },
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/paTrHCbnwMxBZREfoGcfY5TlvyY.jpg',
            name: 'Parmeet Sethi',
            character: 'Kuljeet Singh',
        },
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/AaXbQI0fAoTW4Qjg4dAtC5xkK1G.jpg',
            name: 'Satish Shah',
            character: "Ajit Singh, Kuljeet's Father",
        },
        {
            image: 'https://media.themoviedb.org/t/p/w138_and_h175_face/l50tq0OwzIxE4Z5JXDUSQvqCltN.jpg',
            name: 'Mandira Bedi',
            character: "Preeti Singh, Kuljeet's Sister",
        },
    ]
    return (
        <div>
            <div className='overflow-hidden relative flex items-center w-full min-h-60'>
                <img className='left-2 relative z-50 w-28 h-40 object-cpver rounded-xl' src="https://media.themoviedb.org/t/p/w150_and_h225_bestv2/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg" alt="main-poster" />
                <img className='absolute z-40 object-contain' src="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg" alt="bg-image" />
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='text-xl text-center font-semibold'>Dilwale Dulhania Le Jayenge (1995)</h4>
                <div className='flex flex-col'>
                    <span className='font-semibold text-lg'>Overview</span>
                    <span className='text-justify'>Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.</span>
                </div>
                <div className='flex flex-col'>
                    <span>Aditya Chopra</span>
                    <span>Director, Screenplay, Story</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-lg font-semibold'>Cast</span>
                    <div className='relative overflow-auto scroll-smooth pb-3 flex gap-3 justify-start'>
                        {
                            movieCast.map((props) => {
                                return (
                                    <div className='flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
                                        <img className='rounded-lg object-cover' src={props.image} alt="" />
                                        <div className='flex flex-col'>
                                            <span className='px-2 text-md'>{props.name}</span>
                                            <span className='px-2 text-sm text-gray-500'>{props.character}</span>
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
                        <span className='text-sm text-gray-600 px-2'>20 October 1995</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>Runtime</span>
                        <span className='text-sm text-gray-600 px-2'>189 minutes</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg font-semibold'>Genre</span>
                        <div className='text-sm text-gray-600 px-2 flex gap-3'>
                            <span>Classical</span>
                            <span>Drama</span>
                            <span>Romance</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie