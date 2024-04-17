import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='min-h-screen font-Poppins'>
      <Navbar />
      <div className='pt-16 px-2'>
        <Home />
      </div>
    </div>
  )
}

export default App