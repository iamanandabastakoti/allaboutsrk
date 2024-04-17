import React from 'react'
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

const Home = () => {
    const info = [
        {
            title: 'Also known as',
            content: 'SRK, King Khan, King Of Bollywood etc.',
        },
        {
            title: 'Profession',
            content: 'Actor, Producer',
        },
        {
            title: 'Birthday',
            content: 'November 2, 1965',
        },
        {
            title: 'Place of birth',
            content: 'Delhi, India',
        },
    ]
    const bio = [
        {
            content: "Also known by the initialism SRK, Shah Rukh Khan is probably the greatest actor the Indian Film Industry has ever produced. He has appeared in more than 90 films, and earned numerous accolades. He has been awarded the Padma Shri by the Government of India, as well as the Ordre des Arts et des Lettres and Legion of Honour by the Government of France."
        }
    ]
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center gap-2'>
                <img className='w-44 h-44 object-cover rounded-lg' src="/srk-pic.webp" alt="SRK" />
                <div className='flex flex-col items-center text-center gap-2 p-2'>
                    <h1 className='text-3xl font-semibold'>Shah Rukh Khan</h1>
                    <ul className='flex justify-center gap-4 text-2xl'>
                        <li><FaInstagram /></li>
                        <li><FaXTwitter /></li>
                        <li><FaFacebook /></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-xl font-semibold'>Personal Info</span>
                <div className='flex justify-around flex-wrap gap-6'>
                    {
                        info.map((props) => {
                            return (
                                <div className='w-[40%] flex flex-col'>
                                    <span className='font-semibold'>{props.title}</span>
                                    <span className='flex flex-wrap text-sm'>{props.content}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-xl font-semibold'>Biography</span>
                {
                    bio.map((props) => {
                        return (
                            <div className='text-sm text-justify'>
                                {props.content}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home