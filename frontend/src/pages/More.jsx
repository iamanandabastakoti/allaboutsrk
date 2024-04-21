import React, { useEffect } from 'react'

const More = () => {

  useEffect(() => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
  }, []);
  return (
    <div>More</div>
  )
}

export default More