import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import MessageLoading from '/public/animations/message-loading.json';
import Lottie from 'lottie-react';
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import ViewMessage from './ViewMessage';

const AdminMessages = () => {
  const [hasMessageLoaded, setMessageLoaded] = useState(false)
  const [allMessages, setAllMessages] = useState([]);
  const fetchMessages = async () => {
    setMessageLoaded(false);
    const response = await axios.get('http://localhost:5000/message');
    setAllMessages(response.data);
    setTimeout(() => {
      setMessageLoaded(true);
    }, 1000);
  }
  const deleteSingleMessage = async (messageID) => {
    await axios.delete(`http://localhost:5000/message/delete/${messageID}`);
    toast.success("Message deleted successfully");
    fetchMessages();
    // console.log(messageID)
  }

  const [vieMessage, setViewMessage] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, [])
  return (
    <div className='flex flex-col items-start text-brandColor gap-6'>
      <div className='flex justify-between w-full'>
        <h3 className='text-2xl font-semibold'>All Messages</h3>
        <span className='flex justify-center py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300' onClick={fetchMessages}>Refresh</span>
      </div>
      {
        !hasMessageLoaded ?
          <div className='flex justify-center w-full h-full'>
            <Lottie animationData={MessageLoading} />
          </div>
          :
          <table className='border-x-2 border-borderColor w-full'>
            <tr className='bg-brandColor border-x-2 border-brandColor text-primaryBg h-10'>
              <th className='w-[20%] p-3 text-start'>Name</th>
              <th className='w-[25%] p-3 text-start'>Email</th>
              <th className='w-[40%] p-3 text-start'>Message</th>
              {/* <th className='w-[15%] p-3 text-center'>Action</th> */}
            </tr>
            {
              allMessages.map((message, index) => {
                return (
                  <tr key={index} className='text-center h-12 border-b-2 border-borderColor hover:bg-borderColor group/message cursor-pointer' onClick={() => setViewMessage(true)}>
                    <td className='p-3 text-start'>{message.name}</td>
                    <td className='p-3 text-start'>{message.email}</td>
                    <td className='p-3 text-start relative flex'>
                      <p className='overflow-hidden h-fit'
                        style={{
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          display: '-webkit-box'
                        }}>
                        {message.message}
                      </p>
                      <div className='absolute bg-primaryBg w-20 h-full right-0 top-0 flex justify-evenly items-center group/options invisible group-hover/message:visible shadow-xl'>
                        <MdDelete className='hover:bg-borderColor p-2 rounded-full text-4xl' onClick={() => deleteSingleMessage(message._id)} />
                        {/* <IoEye className='hover:bg-borderColor p-2 rounded-full text-4xl' /> */}
                      </div>
                    </td>
                    {/* <td className='p-3 text-center flex gap-1 items-center'>
                      <span className='flex justify-center py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300'>View</span>
                      <span className='flex justify-center py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300' onClick={() => deleteSingleMessage(message._id)}>Delete</span>
                    </td> */}
                  </tr>
                )
              })
            }
          </table>
      }
      {
        vieMessage &&
        <ViewMessage setViewMessage={setViewMessage} />
      }
    </div>
  )
}

export default AdminMessages