import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
    <div className='min-h-screen font-Poppins'>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className='pt-16 px-2'>
        <Sidebar sidebar={sidebar} />
        <Home />
      </div>
    </div>
  )
}

export default App