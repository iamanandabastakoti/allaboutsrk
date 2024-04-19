import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Filmography from './pages/Filmography'
import AboutUs from './pages/AboutUs'
import More from './pages/More'
import { sidebarContext } from './context/context'

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <sidebarContext.Provider value={{ sidebar, setSidebar }}>
      <div className='min-h-screen font-Poppins'>
        <Navbar />
        <div className='pt-16 px-2'>
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/filmography' element={<Filmography />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/more' element={<More />} />
          </Routes>
        </div>
      </div>
    </sidebarContext.Provider>
  )
}

export default App