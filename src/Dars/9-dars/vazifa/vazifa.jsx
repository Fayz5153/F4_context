import React from 'react'
import Page1 from './page1'
import Page2 from './page2'
import { Route, Routes } from 'react-router-dom'
import "./style.css"

const Vazifa = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Page1/>}/>
        <Route path='/login' element={<Page2/>}/>
        <Route path='/admin' element={<h1 className='hh1'>Admin Page</h1>}/>
        <Route path='/user' element={<h1 className='hh1'>User Page</h1>}/>
      </Routes>
    </div>
  )
}

export default Vazifa
