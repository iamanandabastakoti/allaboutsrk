import React, { useEffect } from 'react'

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
  }, []);
  return (
    <div className='text-justify flex flex-col gap-2'>
      <h5 className='text-2xl text-center font-MontserratAlternate font-semibold underline'>About Us</h5>
      <p>
        Welcome to <span className='text-brandColor font-bold font-MontserratAlternate text-lg'>All About SRK</span>, your ultimate destination for all things related to the legendary Indian actor, Shah Rukh Khan. Born on November 2, 1965, in New Delhi, India. Shah Rukh Khan, often referred to as the "King of Bollywood", has carved an indelible mark in the world of entertainment. This website is a heartfelt tribute to his extraordinary journey, both on and off the screen. Here, we delve deep into the enigmatic persona of SRK, offering you an immersive experience into his captivating world.
      </p>
      <p>
        Our mission is to provide you with a comprehensive glimpse into Shah Rukh Khan's life and work. From his humble beginnings to his meteoric rise in the film industry, we explore the nuances of his personal life, shedding light on the man behind the iconic characters. Additionally, we meticulously curate an extensive filmography section, detailing each movie he has graced with his presence. Whether you're a die-hard fan seeking in-depth insights or a curious soul discovering SRK's magic for the first time, <span className='text-brandColor font-bold font-MontserratAlternate text-lg'>All About SRK</span> is your go-to resource for accurate, engaging, and up-to-date information.
      </p>
      <p>
        Join us on this cinematic odyssey as we celebrate the charm, talent, and charisma of Shah Rukh Khan. Feel free to explore the wealth of knowledge we've gathered, and immerse yourself in the world of one of the greatest actors of our time. Thank you for visiting, and we hope you enjoy your stay at <span className='text-brandColor font-bold font-MontserratAlternate text-lg'>All About SRK</span>.
      </p>
    </div>
  )
}

export default AboutUs