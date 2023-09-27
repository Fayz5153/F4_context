import React, {useState} from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/Contact'

const Dars8 = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => {
         setCount((count)=>count + 1)
    };
  return (
    <React.Fragment>
        <div className='navbar'>
            <NavLink to={"/"}>Home link</NavLink>
            <NavLink to={"/contact"}>Contact link</NavLink>
        </div>
        <div>
            <button onClick={handleCount}>count</button>
            <h1>{count}</h1>
        </div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default Dars8
