import React, { useEffect } from 'react'
import { RiMailSendLine } from "react-icons/ri";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const More = () => {

  const sendMessage = () => {
    toast.error('Cannot Send Messsage Right Now!');
  }

  useEffect(() => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
  }, []);
  return (
    <div>
      <div>
        <h5 className='text-2xl font-semibold'>Contact-US</h5>
        <form className='flex flex-col gap-3'>
          <div>
            <label className='px-2' htmlFor="">Name</label>
            <input className='border-2 border-borderColor rounded-lg p-2 w-full focus:outline-none' type="text" placeholder='Enter your name' required />
          </div>
          <div>
            <label className='px-2' htmlFor="">Email</label>
            <input className='border-2 border-borderColor rounded-lg p-2 w-full focus:outline-none' type="email" placeholder='Enter your email' required />
          </div>
          <div>
            <label className='px-2' htmlFor="">Message</label>
            <textarea className='border-2 border-borderColor rounded-lg p-2 w-full focus:outline-none resize-none' cols="30" rows="4" placeholder='Enter your message' required />
          </div>
        </form>
        <button className='w-full bg-buttonColor p-2 rounded-lg flex justify-center items-center gap-1 text-lg' onClick={sendMessage}>
          <RiMailSendLine />
          Send Message
        </button>
      </div>
    </div>
  )
}

export default More