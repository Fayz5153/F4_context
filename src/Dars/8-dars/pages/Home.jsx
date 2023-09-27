import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <h1 className='hh1'>
      Home
      <Link to={"/contact"}>Contact</Link>
    </h1>
  )
}

export default Home
