import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Filmography from './pages/Filmography'
import AboutUs from './pages/AboutUs'
import More from './pages/More'

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
    <div className='min-h-screen font-Poppins'>
      <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <div className='pt-16 px-2'>
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/filmography' element={<Filmography />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/more' element={<More />} />
        </Routes>
      </div>
    </div>
  )
}

export default App