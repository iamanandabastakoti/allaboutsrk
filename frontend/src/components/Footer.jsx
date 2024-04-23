import React from 'react'
import { FaRegCopyright, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    const mySocials = [
        {
            icon: <FaGithub />,
            link: 'https://github.com/iamanandabastakoti',
        },
        {
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/iamanandabastakoti/',
        },
        {
            icon: <FaLinkedinIn />,
            link: 'https://www.linkedin.com/in/anandabastakoti/',
        },
    ]
    return (
        <div className='bg-navbarBg text-primaryBg min-h-14 flex flex-col justify-center items-center py-4 text-[12px] gap-2'>
            <div className='flex gap-1 items-center'>
                <FaRegCopyright /> 2024 &nbsp; All About SRK - All Rights Reserved
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-2 text-[14px]'>
                <span>
                    Designed and Coded by - Ananda Bastakoti
                </span>
                <div className='flex gap-6 text-lg'>
                    {
                        mySocials.map((props) => {
                            return (
                                <a href={props.link} target='_blank'>
                                    {props.icon}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer