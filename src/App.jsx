import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AllProjects from './components/AllProjects'
import PageNotFound from './pages/404'

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
      <Route path = '/projects' element={<AllProjects/>}/>
    </Routes>
    </>
  )
}

export default App