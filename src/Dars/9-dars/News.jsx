import React from 'react'
import { Link } from 'react-router-dom'

const NEws = () => {
  return (
    <div>
      <h1>News</h1>
      <Link to={"/news/1"}>Yangilik 1</Link> <br />
      <Link to={"/news/2"}>Yangilik 2</Link> <br />
      <Link to={"/news/3"}>Yangilik 3</Link> <br />
      <Link to={"/news/4"}>Yangilik 4</Link> <br />
    </div>
  )
}

export default NEws
