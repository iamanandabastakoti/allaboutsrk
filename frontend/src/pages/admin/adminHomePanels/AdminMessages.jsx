import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const AdminMessages = () => {

  const [allMessages, setAllMessages] = useState([]);
  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:5000/message');
    setAllMessages(response.data);
  }
  const deleteSingleMessage = async (messageID) => {
    await axios.delete(`http://localhost:5000/message/delete/${messageID}`);
    toast.success("Message deleted successfully");
    fetchMessages();
    // console.log(messageID)
  }

  useEffect(() => {
    fetchMessages();
  }, [])
  return (
    <div className='flex flex-col items-start text-brandColor gap-6'>
      <div className='flex justify-between w-full'>
        <h3 className='text-2xl font-semibold'>All Messages</h3>
        <span className='flex justify-center py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300' onClick={fetchMessages}>Refresh</span>
      </div>
      <table className='border-x-2 border-borderColor w-full'>
        <tr className='bg-brandColor border-x-2 border-brandColor text-primaryBg h-10'>
          <th className='w-[20%] p-3 text-start'>Name</th>
          <th className='w-[25%] p-3 text-start'>Email</th>
          <th className='w-[40%] p-3 text-start'>Message</th>
          <th className='w-[15%] p-3 text-center'>Action</th>
        </tr>
        {
          allMessages.map((message, index) => {
            return (
              <tr key={index} className='text-center h-12 border-b-2 border-borderColor'>
                <td className='p-3 text-start'>{message.name}</td>
                <td className='p-3 text-start'>{message.email}</td>
                <td className='p-3 text-start'>{message.message}</td>
                <td className='p-3 text-center flex gap-1 items-center'>
                  <span className='flex justify-center py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300'>View</span>
                  <span className='flex justify-center py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300' onClick={() => deleteSingleMessage(message._id)}>Delete</span>
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default AdminMessages