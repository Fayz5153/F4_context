import React from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import Home from './Home'
import SinglaPage from './SinglaPage'
import NEws from './NEws'

const Dars9 = () => {
    let location = useLocation()
    let navigate = useNavigate()

    const handleGo = () =>{
        navigate("/user")
    }

    console.log(location)
    return (
        <React.Fragment>
            <div>
                <Link to={"/"}>Home  </Link>
                <Link to={"/news"}>  News</Link>
                <h3 onClick={handleGo}>404</h3>
            </div>
            {
                location.pathname !== "/" 
                ?<h1>Loading...</h1>
                :""
            }
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/news' element={<NEws />}/>
                <Route path='/news/:id' element={<SinglaPage/>}/>
                <Route path='*' element={<h1>404</h1>}/>
            </Routes>
        </React.Fragment>
    )
}

export default Dars9
