import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Filmography from './pages/Filmography'
import AboutUs from './pages/AboutUs'
import More from './pages/More'
import SingleMovie from './pages/SingleMovie'
import { IoChevronBackOutline } from "react-icons/io5";
import Footer from './components/Footer'
import SingleGenre from './pages/SingleGenre'

import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Admin from './pages/admin/Admin'

const App = () => {
  const appPath = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div className='min-h-screen font-Poppins'>
      {
        appPath.pathname !== ('/admin') &&
        <Navbar />
      }
      <div className={`${appPath.pathname !== ('/admin') && 'pt-16 pb-6 px-3'} w-full min-h-screen`}>
        <Sidebar />
        {
          appPath.pathname !== ('/' && '/admin') &&
          <div className='text-3xl text-primaryBg bg-brandColor p-1 w-fit rounded-lg mb-2' onClick={goBack}>
            <IoChevronBackOutline />
          </div>
        }
        <Routes>
          <Route index element={<Home />} />
          <Route path='/filmography'>
            <Route index element={<Filmography />} />
            <Route path='/filmography/single-genre' element={<SingleGenre />} />
            <Route path='/filmography/movie/single-movie' element={<SingleMovie />} />
          </Route>
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/more' element={<More />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
      {
        appPath.pathname !== ('/admin') &&
        <Footer />
      }
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  )
}

export default App