import React, { useEffect } from 'react'
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
        },
        {
            content: "SRK started his acting career with appearances in few television series in the late 80s. Later on, he debuted in Bollywood in 1992 with Deewana. Initially, he was recognized for playing villanious role in films like Baazigar(1993) and Darr(1993). Later on, he established himself as a romantic hero by starring in series of successful romantic films like Dilwale Dulhania Le Jayenge (1995), Dil To Pagal Hai (1997), Kuch Kuch Hota Hai (1998), Mohabbatein (2000), Kabhi Khushi Kabhie Gham... (2001), Kal Ho Naa Ho (2003), Veer-Zaara (2004) and Kabhi Alvida Naa Kehna (2006) which eventually gave him the tag of King of Romance"
        },
        {
            content: "SRK earned critical acclaim for several movies like Devdas (2002), Swades (2004), Chak De! India (2007) and My Name Is Khan (2010). Further commercial successes came with the romantic dramas Om Shanti Om (2007) and Rab Ne Bana Di Jodi (2008), and with his expansion to comedies in Chennai Express (2013) and Happy New Year (2014). Following a brief setback with some of his films like Fan(2016), Jab Harry Met Sejal(2017) and Zero(2018) not performing very well at the box-office, SRK made a super comeback with the 2023 action films Pathaan and Jawan, both of which becoming the highest grossing Hindi films after their release. With Dunki set to release on 22 December, 2023 which consists of the long awaited combination of SRK and the ace director Rajkumari Hirani, SRK is again set to conquer the box-office and end the year 2023 with 3 All Time Grossers writing his comeback story in the history books."
        },
    ]

    useEffect(() => {
        window.scrollTo({ top: '0', behavior: 'smooth' });
    }, []);
    return (
        <div className='flex flex-col gap-4 pt-2'>
            <div className='flex flex-col items-center gap-2'>
                <img className='w-44 h-44 object-cover rounded-lg' src="/srk-pic.webp" alt="SRK" />
                <div className='flex flex-col items-center text-center gap-2 p-2'>
                    <h1 className='text-3xl font-semibold'>Shah Rukh Khan</h1>
                    <ul className='flex justify-center gap-4 text-2xl'>
                        <li>
                            <a href="https://www.instagram.com/iamsrk/" target='_blank'>
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/iamsrk/" target='_blank'>
                                <FaXTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/IamSRK" target='_blank'>
                                <FaFacebook />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-xl font-semibold'>Personal Info</span>
                <div className='flex justify-around flex-wrap gap-6'>
                    {
                        info.map((props, index) => {
                            return (
                                <div key={index} className='w-[40%] flex flex-col'>
                                    <span className='font-semibold'>{props.title}</span>
                                    <span className='flex flex-wrap text-sm'>{props.content}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col gap-2 '>
                <span className='text-xl font-semibold'>Biography</span>
                {
                    bio.map((props, index) => {
                        return (
                            <div key={index} className='text-sm text-justify'>
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