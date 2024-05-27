import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RiMailSendLine } from "react-icons/ri";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const More = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = async () => {
    if ((name && email && message) !== '') {
      try {
        const formData = {
          name,
          email,
          message
        }
        await axios.post('http://localhost:5000/message', formData);
        toast.success("Message sent successfully");
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        toast.error('Cannot Send Message Right Now!');
        console.log(error);
      }
    } else {
      toast.error('Please fill up the form!');
    }
  }

  useEffect(() => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
  }, []);
  return (
    <div className='laptop:flex laptop:flex-col laptop:items-center'>
      <div className='laptop:w-3/5'>
        <h5 className='text-2xl text-center font-MontserratAlternate font-semibold underline'>Contact Us</h5>
        <form className='flex flex-col gap-3'>
          <div>
            <label className='px-2' htmlFor="">Name</label>
            <input className='border-2 border-borderColor rounded-lg p-2 w-full focus:outline-none' type="text" placeholder='Enter your name' required value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className='px-2' htmlFor="">Email</label>
            <input className='border-2 border-borderColor rounded-lg p-2 w-full focus:outline-none' type="email" placeholder='Enter your email' required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className='px-2' htmlFor="">Message</label>
            <textarea className='border-2 border-borderColor rounded-lg p-2 w-full focus:outline-none resize-none' cols="30" rows="4" placeholder='Enter your message' required value={message} onChange={e => setMessage(e.target.value)} />
          </div>
        </form>
        <button className='w-full bg-buttonColor p-2 rounded-lg flex justify-center items-center gap-1 text-lg hover:brightness-90' onClick={sendMessage}>
          <RiMailSendLine />
          Send Message
        </button>
      </div>
    </div>
  )
}

export default More