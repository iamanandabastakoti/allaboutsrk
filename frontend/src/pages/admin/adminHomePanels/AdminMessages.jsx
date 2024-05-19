import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminMessages = () => {

  const [allMessages, setAllMessages] = useState([]);
  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:5000/message');
    setAllMessages(response.data);
  }

  useEffect(() => {
    fetchMessages();
  }, [])
  return (
    <div className='flex flex-col items-start text-brandColor gap-6'>
      <h3 className='text-2xl font-semibold'>All Messages</h3>
      <table className='border-x-2 border-borderColor w-full'>
        <tr className='bg-brandColor border-x-2 border-brandColor text-primaryBg h-10'>
          <th className='w-[20%] p-3 text-start'>Name</th>
          <th className='w-[25%] p-3 text-start'>Email</th>
          <th className='w-[40%] p-3 text-start'>Message</th>
          <th className='w-[15%] p-3 text-center'>Action</th>
        </tr>
        {
          allMessages.map((message) => {
            return (
              <tr className='text-center h-12 border-b-2 border-borderColor'>
                <td className='p-3 text-start'>{message.name}</td>
                <td className='p-3 text-start'>{message.email}</td>
                <td className='p-3 text-start'>{message.message}</td>
                <td className='p-3 text-center'>
                  <span className='py-1 px-3 w-32 rounded-lg border-2 border-buttonColor bg-buttonColor cursor-pointer text-primaryBg hover:bg-primaryBg hover:text-buttonColor duration-300'>View</span>
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