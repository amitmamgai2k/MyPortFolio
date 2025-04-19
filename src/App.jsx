import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import AllProjects from './components/All Projects'

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path = '/projects' element={<AllProjects/>}/>
    </Routes>
    </>
  )
}

export default App