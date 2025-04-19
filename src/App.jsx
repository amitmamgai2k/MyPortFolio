import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AllProjects from './components/All Projects'
import PageNotFound from './pages/404'

function App() {
  return (
    <>

    <Routes>
      <Route path='/PortFolio' element={<Home/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
      <Route path = '/PortFolio/projects' element={<AllProjects/>}/>
    </Routes>
    </>
  )
}

export default App