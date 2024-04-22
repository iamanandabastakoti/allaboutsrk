import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Filmography from './pages/Filmography'
import AboutUs from './pages/AboutUs'
import More from './pages/More'
import { sidebarContext } from './context/context'
import SingleMovie from './pages/SingleMovie'
import { IoChevronBackOutline } from "react-icons/io5";
import Footer from './components/Footer'

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const appPath = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <sidebarContext.Provider value={{ sidebar, setSidebar }}>
      <div className='min-h-screen font-Poppins'>
        <Navbar />
        <div className='pt-16 pb-6 px-3 w-full min-h-screen'>
          <Sidebar />
          {
            appPath.pathname !== '/' &&
            <div className='text-3xl text-primaryBg bg-brandColor p-1 w-fit rounded-lg mb-2' onClick={goBack}>
              <IoChevronBackOutline />
            </div>
          }
          <Routes>
            <Route index element={<Home />} />
            <Route path='/filmography'>
              <Route index element={<Filmography />} />
              <Route path='/filmography/single-movie' element={<SingleMovie />} />
            </Route>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/more' element={<More />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </sidebarContext.Provider>
  )
}

export default App